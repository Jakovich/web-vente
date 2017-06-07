'use strict';
$(document).ready(function() {
  
  //ширина перехода на струтктуру для узких экранов
  var WIDTH  = 985;

  //изменение порядка блоков для узких экранов 
  var offerWrp = $('<div class="offer__wrp"></div>');
  var offerWrpRight = $('<div class="offer__wrp-right"></div>'); 
  
  function changePlace() {
    if(window.innerWidth <= WIDTH){
      $('.breadcrumbs').insertAfter('.search');
      $('.franchise-slider--top').insertAfter('.describe');
      $('.price').insertAfter('.actions');
      offerWrp.insertAfter('.price');
      offerWrp.append(offerWrpRight);
      offerWrp.append($('.offer--left'));
      offerWrpRight.append($('.subscribe'));
      offerWrpRight.append($('.offer--right'));
      
    } else {
      $('.breadcrumbs').insertBefore('.main-content__white-wrp');
      $('.left-sticky').append($('.subscribe'));
      $('.left-sticky').append($('.offer--left'));
      $('.right-sticky').append($('.franchise-slider--top'));
      $('.right-sticky').append($('.offer--right'));
      $('.price').insertAfter('.franchise-slider--new');
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
  
  function showToggle() {
    var menuPosition = $('.main-header__info').offset().top + 27;
    var searchPosition = $('.search').offset().top + 60;
      
    if (menuPosition > searchPosition) {
      $('.main-header__location').css('visibility', 'hidden');
      $('.main-header__toggle').fadeIn();
    } else {
      $('.main-header__location').css('visibility', 'visible');
      $('.main-header__toggle').fadeOut();
    }
  }
  
  $(window).scroll(function(){
    showToggle();
  });
  
  
  
  /*слайдер с баннермаи посередине*/
  $(function() {
  $('.promo-slider__jcarousel')
       .on('jcarousel:reload jcarousel:create', function () {
          var carousel = $(this),
          width = carousel.innerWidth();


          carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
      })
       .jcarousel({
        wrap: 'circular' // Прокрутка по кругу
      }).jcarouselAutoscroll({
        interval: (12 * 1000), // 60 * 100 = 1 минута в милисекундах
        target: '+=1', // На сколько кадров прокручивать за один раз
        autostart: true
      });

    $('.promo-slider__prev')
      .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '-=1'
      });

    $('.promo-slider__next')
      .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '+=1'
      });

    $('.promo-slider__jcarousel').hover(function () {
      $('.jcarousel').jcarouselAutoscroll('stop');
    }, function () {
      $('.jcarousel').jcarouselAutoscroll('start');
    });


   });
  
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
  