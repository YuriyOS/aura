//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/slick-carousel/slick/slick.min.js
//= ../../node_modules/slick-lightbox/dist/slick-lightbox.min.js


  $(function(){
    $('.plans__slider').slick({
        //   setting-name: setting-value
        arrows: true,
        dots: true,
        dotsClass: 'plans_dots-style',
        
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
            settings: "unslick"
        },
          {
            breakpoint: 1144,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              // dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }                  
        ]

        });

        $('.documents__slider').slickLightbox({
          itemSelector        : '.doc__link',
          navigateByKeyboard  : true,
          layouts: {
            slickPrev: '<span style="position: absolute; top: 100px; right: 10px; color: red;">aww yeah</span>'
          }
        });

        $('.photo__slider').slick({
          arrows: true,
          dots: false,
          adaptiveHeight: true,
         dotsClass: 'plans_dots-style',

          // settings: "unslick",
          // slidesToShow: 6,
          // slidesToScroll: 6,
  
          responsive: [
            {
              breakpoint: 10000,
              settings: "unslick"
          },
            {
              breakpoint: 1144,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: true
              }
            }               
          ]
  
          
          });     

        $('.photo__slider').slickLightbox({
          itemSelector        : '.photo__link_big-size',
          navigateByKeyboard  : true
        });
        
        $('.plans__slider').slickLightbox({
          itemSelector        : '.plans__link_big-size',
          navigateByKeyboard  : true
        });

        function createModal(sTitle = 'Заполните форму') {
          $('body').prepend(
            '' +
              '<div class="modal">\n' +
              '    <div class="modal__dialog">\n' +
              '        <div class="modal__body">\n' +
              '        <div class="btn-close"></div>\n' +
              '        <h2 class="form__title h2">' +
              sTitle +
              '</h2>\n' +
              '        <form class="form modal__form">        \n' +        
              '            <input class="input modal__input main-text" type="text" name="Name" placeholder="Ваше имя..." required><br>\n' +
              // '            <input class="input modal__input main-text" type="text" name="E-mail" placeholder="Ваше E-mail..." required><br>\n' +
              '            <input class="input modal__input main-text" type="text" name="Phone" placeholder="Ваш телефон..."><br>\n' +
              '            <button type="submit" class="form__btn">'+ sTitle +'</button>\n' +
              '        </form>\n' +
              '        </div>\n' +
              '        <div class="modal__footer">\n' +
              '        <p class="modal__footnote action__subtext main-text_white">Ваши данные в полной безопасности и никогда не будут переданы 3-м лицам.</p>\n' +
              '        </div>\n' +
              '    </div>\n' +
              '</div>',
          );
        }

        $('.js-action__btn').on('click', function (e) {
          createModal($(e.target).data('formTitle'));
      
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
        });
      
        $(".modal__form").submit(function(e) { //Change
          console.log('sagdgd');
          e.preventDefault();
          var th = $(this);
          $.ajax({
            type: "POST",
            url: 'mail.php',
            // data: data,
            // dataType: 'json',
            success: function () {
                console.log('Success');
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
            }
        });
          return false;
        });
  })
