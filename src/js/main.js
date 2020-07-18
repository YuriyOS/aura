//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/slick-carousel/slick/slick.min.js
//= ../../node_modules/slick-lightbox/dist/slick-lightbox.min.js


  $(function(){

    // Mobile Menu
    
  $('.js-menu-btn_open').on('click', function(){
    $('.navigation').addClass('navigation_visible');
    $('.navigation__overlay').addClass('navigation__overlay_visible');
    $('body').addClass('body_fixed');
  });

  $('.js-menu-btn_hide, .js-navigation__overlay').on('click', function(){
    $('.navigation').removeClass('navigation_visible');
    $('.navigation__overlay').removeClass('navigation__overlay_visible');
    $('body').removeClass('body_fixed');
  });
  
  // Mobile Menu End

  // Site Sliders
  
  $('.viewing__slider').slick({
    arrows: true,
    dots: false,
    adaptiveHeight: true,
   dotsClass: 'viewing_dots-style',

    responsive: [
      {
        breakpoint: 10000,
        settings: "unslick"
    },
      {
        breakpoint: 1144,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true
        }
      },
      {
        breakpoint: 768,
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
          }
        },

          {
            breakpoint: 1144,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
    
        $('.plans__slider').slickLightbox({
          itemSelector        : '.plans__link_big-size',
          navigateByKeyboard  : true
        });


    $('.building__slider').slick({

        arrows: true,
        dots: true,
        dotsClass: 'building_dots-style',

        responsive: [   
          {
            breakpoint: 10000,
            settings: "unslick"
        },

          {
            breakpoint: 1144,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
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
              '            <button type="submit" class="action-form__btn">'+ sTitle +'</button>\n' +
              '        </form>\n' +
              '        </div>\n' +
              '        <div class="modal__footer">\n' +
              '        <p class="modal__footnote main-text_white">Ваші дані в цілковитій безпеці і ніколи НЕ будуть передані 3-м особам.</p>\n' +
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
