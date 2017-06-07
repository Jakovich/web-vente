'use strict';
$(document).ready(function() {
  
  //окрытие попапа при нажатии на ссылку
  var popup = $('#consult');
  var popupOverlay = $('.popup-franchise__overlay');
  var popupConfirm = $('.popup-confirm');
  var popupConfirmOverlay = $('.popup-confirm__overlay');
  $('.create-location__link, .create-examples__link').click(function (evt) {
    evt.preventDefault();
    popup.fadeIn(500);
    popupOverlay.fadeIn(500);
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
  popupOverlay.click(function() {
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
  
  //инициализация слайдера
  $(function() {
  $('.create-examples__jcarousel')
       .on('jcarousel:reload jcarousel:create', function () {
         // var carousel = $(this),
          //width = carousel.innerWidth();


          //carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
      })
       .jcarousel({
        wrap: 'circular' // Прокрутка по кругу
      }).jcarouselAutoscroll({
        interval: (12 * 1000), // 60 * 100 = 1 минута в милисекундах
        target: '+=1', // На сколько кадров прокручивать за один раз
        autostart: true
      });

    $('.create-examples__slider-prev')
      .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '-=1'
      });

    $('.create-examples__slider-next')
      .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '+=1'
      });
    $('.create-examples__slider-pagination')
      .on('jcarouselpagination:active', 'a', function () {
        $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function () {
        $(this).removeClass('active');
      })
      .jcarouselPagination();

    $('.create-examples__jcarousel').hover(function () {
      $('.jcarousel').jcarouselAutoscroll('stop');
    }, function () {
      $('.jcarousel').jcarouselAutoscroll('start');
    });


   });
  
  var WIDTH  = 1260;
  var expWrp = $('.create-location__exp')

  function changePlace() {
    if(window.innerWidth <= WIDTH){
      expWrp.insertAfter('.create-location__title');
      
    } else {
      $('.create-location__info').append(expWrp);

    }
  }

  window.onload = function() {
    if((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < WIDTH){
      changePlace();
    }
  }

  window.onresize = function(){ 
    changePlace(); 
  }
})