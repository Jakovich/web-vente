'use strict';
$(document).ready(function() {
  
  //ширина перехода на струтктуру для узких экранов
  var WIDTH  = 985;

  //изменение порядка блоков для узких экранов 
  var offerWrp = $('<div class="offer__wrp offer__wrp--nopadding"></div>');
  var offerWrpRight = $('<div class="offer__wrp-right"></div>'); 
 
  function changePlace() {
    if(window.innerWidth <= WIDTH){
      offerWrp.insertAfter('.franchise-rating');
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

  window.onresize = function(){ 
    changePlace(); 
  }

  window.onload = function() {
    if((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) < WIDTH){
      changePlace();
    }
  }

  window.onresize = function(){ 
    changePlace(); 
  }
  
  
  
  
  
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
  