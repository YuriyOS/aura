document.addEventListener("DOMContentLoaded", function () {
    function showSuccessContent() {
        $('.js-modal-content').html(
          "<h3>Супер! </h3> <p class=\"success-text main-text\">Найближчим часом наш провідний фахівець Олена зв'яжется з Вами. ЖК Аура бажає Вам гарного настрою!</p> ",
        );
        $('.modal__footer').remove();
      }
    document.addEventListener('submit', function(event) {
        var $this = event.target;

        if ($this.classList.contains("js-form-apply")) {
            var http = new XMLHttpRequest();
            http.open("POST", '/form/www/templates/modules/mail/php/sendmail.php');
            http.onreadystatechange = function() {//Call a function when the state changes.
                if(http.readyState == 4 && http.status == 200) {
                    var res1 = JSON.parse(http.responseText);
                    if(res1.error==0){
                        // $this.innerHTML = '<h2>'+res1.data+'</h2>';
                        showSuccessContent();
                    } else {
                        alert(res1.data);
                        if($('.g-recaptcha').length){
                            grecaptcha.reset();
                        }
                    }
                }
            }
            http.send(new FormData($this));

            event.preventDefault();
            return false;
        } else {
            return true;
        }
    });

});
