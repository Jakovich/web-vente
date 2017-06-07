'use strict';
$(document).ready(function() {

  /**
    Добавление в head ссылки на googleFonts
    --------------------------------------
  */
$('head').append('<link href="https://fonts.googleapis.com/css?family=PT+Sans:400,400i,700,700i&amp;subset=cyrillic,cyrillic-ext,latin-ext" rel="stylesheet">');


  //ширина перехода на струтктуру для узких экранов
  var WIDTH  = 985;

  /*
   Фиксирование меню при скролле
  */

  var mainNavY;//основное меню
  var infoNavY;//первая строчка header

  //получает текущею позицию меню
  function getMenuOffset() {
    //mainNavY= $('.main-header__nav').offset().top;
    mainNavY = $('.main-header').offset().top + $('.main-header').innerHeight() - $('.main-header__nav').innerHeight();
    infoNavY = $('.main-header').offset().top
  }
  getMenuOffset();
  //присваивает фиксирующий класс меню
  function fixMenu(elem, mainClass, fixedClass, offtop) {
    var mainHeader = $(mainClass);
    if ($(elem).scrollTop() > offtop) {
      mainHeader.addClass(fixedClass)
    } else {
      mainHeader.removeClass(fixedClass)
    }
  }

  //удаление фиксирующего класса у меню при его скрытии
  function removeFixedMenu() {
    if ((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) <= WIDTH) {
      $('.main-header__nav').removeClass('main-header__nav--fixed');
    }
  }



function changeFixMenu(elem) {
  if ((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) <= WIDTH) {
    fixMenu(elem, '.main-header__info', 'main-header__info--fixed', infoNavY)
  } else {
    fixMenu(elem, '.main-header__nav', 'main-header__nav--fixed', mainNavY)
  }
}
//changeFixMenu(window);

  $(window).scroll(function(){

    changeFixMenu(this);
    showBtn(this);
  });


  /*
    Присваивание класса body в зависимости от ширины экрана
  */

  function addBodyClass() {
    if((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) >= WIDTH){
      $('body').addClass('full-width');
      $('body').removeClass('small-width');
    } else {
      $('body').addClass('small-width');
      $('body').removeClass('full-width');
    }
  }
  addBodyClass();

  $(window).resize(function(){
    addBodyClass();
    removeFixedMenu();
    getMenuOffset();
    changeFixMenu(this);

    setTimeout(function () {
      getMenuOffset();

    }, 100)
  })

  /*Показ и скрытие мобильного меню */

  function mobileNavToggle() {
    var mobileNav = $('.mobile-nav');
    $('.mobile-nav__toggle').click(function(evt) {
      evt.preventDefault();
      var currentPos = $(this).offset().top;
      mobileNav.css('top', currentPos);
      mobileNav.toggleClass('mobile-nav--opened');
    })

    $('.mobile-nav__close i').click(function() {
      mobileNav.toggleClass('mobile-nav--opened');
    })

    $('.main-header__toggle').click(function(evt) {
      evt.preventDefault();
      var currentPos = $(this).offset().top - 10;
      mobileNav.css('top', currentPos);
      mobileNav.toggleClass('mobile-nav--opened');
    })
  }

  mobileNavToggle();

  /*
   Попап
  */

  //окрытие попапа при нажатии на ссылку
  var popupReport = $('.popup-report');
  var popupReportOverlay = $('.popup-report__overlay');

  $('#report').click(function (evt) {
    evt.preventDefault();
    popupReport.fadeIn(500);
    popupReportOverlay.fadeIn(500);
  })

  popupReport .click(function (evt) {
    evt.stopPropagation();
  })


  //функция закрытия попапа

  function closePopup(elem, overlay) {
    elem.fadeOut(500);
    overlay.fadeOut(500);
    if (elem.hasClass('popup-report__shake')) {
      elem.removeClass('popup-report__shake');
    }
  }

  //закрытие попапа при нажатии на крестик или по затемненному фону
  $('.popup-report__close').click(function () {
    closePopup(popupReport, popupReportOverlay);
  })

  popupReportOverlay.click(function () {
    closePopup(popupReport, popupReportOverlay);
  })

  //закрытие попапа при нажатии на клавишу esc
  $(this).keydown(function (eventObject) {
    if (eventObject.which == 27)
      closePopup(popupReport, popupReportOverlay);
  });


  /*
   Кнопка сролла вверх
  */

  //появление кнопки вверх
  function showBtn(elem) {
    if ($(elem).scrollTop() > 1000) {
      $('#up-btn').fadeIn(400);
    } else {
      $('#up-btn').fadeOut(400);
    }
  }

  //функция скролла при нажатии на кнопку вверх
  $('#up-btn').click( function() {
    $('body,html').animate({scrollTop:0},800);
  })


  /*
    Баннеры
  */

  //закрытие верхнего баннера

  $('.offer__close').click(function() {
    $(this).fadeOut();
    $('.offer--top img').animate({'height' : 0}, 300, function() {
      $('.offer--top').hide(); getMenuOffset();
    });
  })

  //присваивание стилей вспомогательному изображению в баннерах
  /*$('.offer > img, .promo-slider > li > img').css({
    'margin': '0',
    'padding': '0',
    'border':'0',
    'height':'1',
    'width':'1',
    'display':'block',
    'position':'relative',
    'top':'-1px'
  })*/




});
