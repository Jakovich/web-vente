'use strict';

$(document).ready(function(){
  var WIDTH  = 985;

  //инициализация слайдера с фото
  $(function() {
  $('.franchise-photos__jcarousel')
       .on('jcarousel:reload jcarousel:create', function () {
          var carousel = $(this),
          width = carousel.innerWidth();


          carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
      })
       .jcarousel({
        wrap: 'circular' // Прокрутка по кругу
      }).jcarouselAutoscroll({
        interval: (11 * 1000), // 60 * 100 = 1 минута в милисекундах
        target: '+=1', // На сколько кадров прокручивать за один раз
        autostart: true
      });

    $('.franchise-photos__prev')
      .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '-=1'
      });

    $('.franchise-photos__next')
      .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '+=1'
      });

    $('.franchise-photos__jcarousel').hover(function () {
      $('.jcarousel').jcarouselAutoscroll('stop');
    }, function () {
      $('.jcarousel').jcarouselAutoscroll('start');
    });

    $('.franchise-photos__pagination')
      .on('jcarouselpagination:active', 'a', function () {
        $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function () {
        $(this).removeClass('active');
      })
      .jcarouselPagination();

   });

  //заполнение поля сообщения

  $('.franchise-question__textarea').focus(function(){
    var msg = 'Можете дать более развернутую информацию по поводу франшизы? Мой город: Москва'
    if ($(this).val() === '') {
      $(this).val(msg);
    }

  })

  var offerWrp = $('<div class="offer__wrp"></div>');
  var offerWrpRight = $('<div class="offer__wrp-right"></div>');
  var infoWrp = $('<div class="franchise__info-wrp"></div>')
  function changePlace() {
    if(window.innerWidth <= WIDTH){
      infoWrp.insertAfter('.franchise-intro');
      infoWrp.append($('.franchise-info'));
      infoWrp.append($('.franchise-finance'));
      offerWrp.insertAfter('.franchise-question');
      offerWrp.append(offerWrpRight);
      offerWrp.append($('.offer--left'));
      offerWrpRight.append($('.subscribe'));
      offerWrpRight.append($('.offer--right'));
      $('.franchise-slider--top').insertAfter(offerWrp);
    } else {
      $('.main-content__right').prepend($('.franchise-finance'));
      $('.main-content__right').prepend($('.franchise-info'));
      $('.left-sticky').append($('.subscribe'));
      $('.left-sticky').append($('.offer--left'));
      $('.right-sticky').append($('.franchise-slider--top'));
      $('.right-sticky').append($('.offer--right'));
    }
  }

  window.onload = function() {
    if((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < WIDTH){
      changePlace();
    }
  }


  $(window).resize(function() {
    changePlace();
  });


  //открыте попапа Связи с франчайзером



  //окрытие попапа при нажатии на ссылку
  var popup = $('.popup-franchise');
  var popupOverlay = $('.popup-franchise__overlay');
  var popupConfirm = $('.popup-confirm');
  var popupConfirmOverlay = $('.popup-confirm__overlay');
  $('#connect-link').click(function (evt) {
    evt.preventDefault();
    $('#connect-franchiser').fadeIn(500);
    $('#connect-franchiser').closest('.popup-franchise__overlay').fadeIn(500);
  })

  $('#report-link').click(function (evt) {
    evt.preventDefault();
    $('#franchise-report').fadeIn(500);
    $('#franchise-report').closest('.popup-franchise__overlay').fadeIn(500);
  })

  //функция закрытия попапа

  function openConfirm() {
    popupConfirm.fadeIn(500);
    popupConfirmOverlay.fadeIn(500);
  }

  function closePopup(elem, overlay) {
    elem.fadeOut(500);
    overlay.fadeOut(500);
  }

  //закрытие попапа при нажатии на крестик или по затемненному фону


  $('.popup-franchise__close').click(function () {
    openConfirm();
  })

  //закрытие попапа при нажатии на клавишу esc
  $(this).keydown(function (eventObject) {
    if (eventObject.which == 27)
      openConfirm();
  });

  $('#confirm-yes').click(function(){
    closePopup(popup, popupOverlay);
    closePopup(popupConfirm, popupConfirmOverlay);
  });

  $('#confirm-no').click(function(){
    closePopup(popupConfirm, popupConfirmOverlay);
  });
  //появление меню с формой
  var introOffset;
  function getIntroOffset() {
    introOffset = $('.franchise-intro').offset().top + $('.franchise-intro').innerHeight();
  }

  $('.offer__close').click(function() {
    $(this).fadeOut();
    $('.offer--top img').animate({'height' : 0}, 300, function() {
      $('.offer--top').hide();
      getIntroOffset();
    });
  })

  getIntroOffset();
  function showForm(elem) {
    if ($(elem).scrollTop() > introOffset) {
      $('.franchise-documents').fadeIn();
    } else {
      $('.franchise-documents').fadeOut();
    }
  }

  $(window).scroll(function() {
    if ((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > WIDTH) {
      showForm(this);
    }

  })

  $(window).resize(function() {
    showForm();
    getIntroOffset();
  })

  /*
  Боковые виджеты
  */


  function setSlider(elem, duration) {
    $(elem).jcarousel({
      wrap: 'circular' // Прокрутка по кругу
    }).jcarouselAutoscroll({
      interval: (duration * 1000), // 60 * 100 = 1 минута в милисекундах
      target: '+=1', // На сколько кадров прокручивать за один раз
      autostart: true
    });
  }
  function setSliderBtn(elem) {
    $('.franchise-slider__prev')
      .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '-=1'
      });

    $('.franchise-slider__next')
      .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '+=1'
      });

    $('.franchise-slider__jcarousel').hover(function () {
      $('.jcarousel').jcarouselAutoscroll('stop');
    }, function () {
      $('.jcarousel').jcarouselAutoscroll('start');
    });

    $('.franchise-slider__pagination')
      .on('jcarouselpagination:active', 'a', function () {
        $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function () {
        $(this).removeClass('active');
      })
      .jcarouselPagination();
  }

  setSlider('.franchise-slider--top .franchise-slider__jcarousel', 10);
  if ($('article').is('.franchise-slider--new')) {
    setSlider('.franchise-slider--new .franchise-slider__jcarousel', 8);
  }

  setSliderBtn();


  //инициализация плагина stick
  //внесены изменения в сам плагин для ограничения работы на узких экранах
  $('.left-sticky').stick_in_parent({offset_top: 40});
  $('.right-sticky').stick_in_parent({offset_top: 60});
})

'use strict'; 
$(document).ready(function() {
  
  //маски и валидация формы запросить документацию
  
  function checkDocumentForm(elem) {
    var nameValue = 0;
    var emailValue = 0;
    var phoneValue = 0;
    var nameInput = $(elem + ' [name=name]');
    var emailInput = $(elem + ' [name=email]');
    var phoneInput = $(elem + ' [name=phone]');
    var submitBtn = $(elem + ' button[type=submit]');
    //имя 
    if (Inputmask.isValid(nameInput.val(), {
        alias: "a{2,20} [aa{2,20}]"
      })) {
      nameValue = 1;
    };
      
    //поле email
    if (Inputmask.isValid(emailInput.val(), {
        alias: "email"
      })) {
      emailValue = 1;
    };
      //телефон
    if (Inputmask.isValid(phoneInput.val(), {
        alias: "+7 (999) 999-9999"
      })) {
      phoneValue = 1;
    };
    
    phoneInput.inputmask("+7 (999) 999-9999", {
      "onincomplete": function () {
        phoneValue = 0;
      
      },
      "oncomplete": function () {
        phoneValue = 1;
        $(this).removeClass('franchise-documents__required');
      }
    })
    
    nameInput.inputmask("a{2,20} [aa{2,20}]", {
    "placeholder": " ",
    "showMaskOnHover": false,
    "onincomplete": function () {
      nameValue = 0;
    },
    "oncomplete": function () {
      nameValue = 1;
      $(this).removeClass('franchise-documents__required');
    }
  });

  //добавление маски на поле email
  emailInput.inputmask({
    "alias": "email",
    "onincomplete": function () {
      emailValue = 0;
      
    },
    "oncomplete": function () {
      emailValue = 1;
      $(this).removeClass('franchise-documents__required');
    },
    "showMaskOnHover": false
  })
  
  submitBtn.click(function (evt) {
    //проверка заполненности поля телефон
    if (nameValue === 0) {
      evt.preventDefault();
      nameInput.addClass('franchise-documents__required');
      
    }
    
    if (phoneValue === 0) {
      evt.preventDefault();
      phoneInput.addClass('franchise-documents__required');
      
    }
    //проверка заполненности поля email
    
    if (emailValue === 0) {
      evt.preventDefault();
      emailInput.addClass('franchise-documents__required');
     
    }

  });

  }
  
  checkDocumentForm('.franchise-documents__form');
  checkDocumentForm('#connect-franchiser .popup-franchise__form');
  checkDocumentForm('#franchise-report .popup-franchise__form');
  checkDocumentForm('.franchise-question__form');
  
})
$(document).ready(function () {})
"use strict";

function r(f) {
  /in/.test(document.readyState) ? setTimeout('r(' + f + ')', 9) : f()
}
r(function () {
  if (!document.getElementsByClassName) {
    // IE8 support
    var getElementsByClassName = function (node, classname) {
      var a = [];
      var re = new RegExp('(^| )' + classname + '( |$)');
      var els = node.getElementsByTagName("*");
      for (var i = 0, j = els.length; i < j; i++)
        if (re.test(els[i].className)) a.push(els[i]);
      return a;
    }
    var videos = getElementsByClassName(document.body, "youtube");
  } else {
    var videos = document.getElementsByClassName("youtube");
  }

  var nb_videos = videos.length;
  for (var i = 0; i < nb_videos; i++) {
    // Overlay the Play icon to make it look like a video player
    var play = document.createElement("div");
    play.setAttribute("class", "play");
    videos[i].appendChild(play);

    videos[i].onclick = function () {
      // Create an iFrame with autoplay set to true
      var iframe = document.createElement("iframe");
      var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
      if (this.getAttribute("data-params")) iframe_url += '&' + this.getAttribute("data-params");
      iframe.setAttribute("src", iframe_url);
      iframe.setAttribute("frameborder", '0');

      // The height and width of the iFrame should be the same as parent
      iframe.style.width = this.style.width;
      iframe.style.height = this.style.height;

      // Replace the YouTube thumbnail with YouTube Player
      this.parentNode.replaceChild(iframe, this);
    }
  }
});
