//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/jquery-validation/dist/jquery.validate.js
//= ../../node_modules/slick-carousel/slick/slick.min.js
//= ../../node_modules/slick-lightbox/dist/slick-lightbox.min.js

$(function () {
  // Mobile Menu

  $('.js-menu-btn_open').on('click', function () {
    $('.navigation').addClass('navigation_visible');
    $('.navigation__overlay').addClass('navigation__overlay_visible');
    $('body').addClass('body_fixed');
  });
  ``;

  function hideMenu() {
    $('.navigation').removeClass('navigation_visible');
    $('.navigation__overlay').removeClass('navigation__overlay_visible');
    $('body').removeClass('body_fixed');
  }

  $('.js-menu-btn_hide, .js-navigation__overlay').on('click', function () {
    hideMenu();
  });

  // Mobile Menu End

  // Animation Scroll
  $('.navigation__link').on('click', function (e) {
    e.preventDefault();
    hideMenu();

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top - $('.header').height(),
      },
      1500,
    );
  });
  // Animation Scroll End

  // Thank You Form
  function showSuccessContent() {
    $('.js-modal-content').html(
      "<h3>Супер! </h3> <p class=\"success-text main-text\">Найближчим часом наш провідний фахівець Олена зв'яжется з Вами. ЖК Аура бажає Вам гарного настрою!</p> ",
    );
    $('.modal__footer').remove();
  }

  function formSubmit() {

    $('.js-form-apply').validate({
      rules: {
          name: {
              required: true,
              minlength: 2
          },
          phone: {
              required: true,
              number: true
          },
      },
      messages: {
        name: 'Будь ласка, вкажіть ім\'я!',
        phone: 'Будь ласка, введіть номер'
      },
      submitHandler: function(){
        // $.ajax({
        //   type: 'POST',
        //   url: '/form/www/templates/modules/mail/php/sendmail.php',
        //   success: function () {
        //     showSuccessContent();
        //   },
        //   error: function (xhr, ajaxOptions, thrownError) {
        //     console.log(
        //       thrownError + '\r\n' + xhr.statusText + '\r\n' + xhr.responseText,
        //     );
        //   },
        // });
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
            // http.addEventListener("load", showSuccessContent, false);

            event.preventDefault();
            return false;
      }
  }
);

    // $('.js-form-apply').on('submit', function (e) {
    //   e.preventDefault();
    //   $.ajax({
    //     type: 'GET',
    //     url: '',
    //     // data: data,
    //     // dataType: 'json',
    //     success: function () {
    //       showSuccessContent();
    //     },
    //     error: function (xhr, ajaxOptions, thrownError) {
    //       console.log(
    //         thrownError + '\r\n' + xhr.statusText + '\r\n' + xhr.responseText,
    //       );
    //     },
    //   });
    // });
  }

  // Thank You Form End

  // Site Sliders

  $('.viewing__slider').slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    dotsClass: 'viewing_dots-style',

    responsive: [
      // {
      //   breakpoint: 10000,
      //   settings: 'unslick',
      // },
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1144,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
    ],
  });

  $('.plans__slider').slick({
    arrows: true,
    dots: true,
    dotsClass: 'plans_dots-style',
    // appendDots: $('.parameters'),

    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        },
      },

      {
        breakpoint: 1144,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.plans__slider').slickLightbox({
    itemSelector: '.plans__link_big-size',
    navigateByKeyboard: true,
  });

  $('.building__slider').slick({
    arrows: true,
    dots: true,
    dotsClass: 'building_dots-style',

    responsive: [
      {
        breakpoint: 10000,
        settings: 'unslick',
      },

      {
        breakpoint: 1144,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.documents__slider').slick({
    arrows: true,
    dots: false,
    // settings: "unslick",
    // slidesToShow: 5,
    // slidesToScroll: 5,

    responsive: [
      {
        breakpoint: 10000,
        settings: 'unslick',
      },
      {
        breakpoint: 1144,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          // dots: true
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.documents__slider').slickLightbox({
    itemSelector: '.doc__link',
    navigateByKeyboard: true,
    layouts: {
      slickPrev:
        '<span style="position: absolute; top: 100px; right: 10px; color: red;">aww yeah</span>',
    },
  });

  function createModal(sFormType = '') {
    $('body').prepend(
      '' +
        '<div class="modal">\n' +
        '    <div class="modal__dialog">\n' +
        '        <div class="modal__body">\n' +
        '        <div class="btn-close"></div>\n' +
        '        <div class="js-modal-content">\n' +
        '        <h3 class="form__title">Заповніть форму нижче! <br> Ми звяжемося з Вами, відповімо на всі питання та підберемо зручний час перегляду.</h3>' +
        '        <form class="form modal__form js-form-apply">        \n' +
        '            <input class="input modal__input main-text" type="text" name="name" placeholder="Ваше ім\'я..." required><br>\n' +
        '            <input class="input modal__input main-text" type="tel" name="phone" placeholder="Ваш телефон..."><br>\n' +
        '            <input type="hidden" name="form" value="' +
        sFormType +
        '">' +
        '            <button type="submit" class="action-form__btn"> Хочу на перегляд</button>\n' +
        '        </form>\n' +
        '        </div>\n' +
        '        </div>\n' +
        '        <div class="modal__footer">\n' +
        '        <p class="modal__footnote main-text_white">Ваші дані в цілковитій безпеці і ніколи НЕ будуть передані 3-м особам.</p>\n' +
        '        </div>\n' +
        '    </div>\n' +
        '</div>',
    );
  }

  $('.js-action__btn').on('click', function (e) {
    createModal($(e.target).data('formType'));

    $('.modal').fadeIn();
    $('body').addClass('body_fixed');
    $('.modal').on('click', function (e) {
      if (
        !$(e.target).closest('.modal__dialog').length &&
        !$(e.target).is('.modal__dialog')
      ) {
        $('.modal').fadeOut();
        $('.overlay').remove();
        $('.modal').remove();
        $('body').removeClass('body_fixed');
      }
    });

    $('.btn-close').on('click', function () {
      $('.modal').fadeOut();
      $('.overlay').remove();
      $('.modal').remove();
      $('body').removeClass('body_fixed');
    });

    formSubmit();
  });
});
