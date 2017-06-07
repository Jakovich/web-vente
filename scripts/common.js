 'use strict';

$(document).ready(function(){

  /**
    Валидация формы попапа
    ----------------------------------------
  */

  /** 
   * @const
   * @type {number}
   */
  var popupValidPhone = 0;

  /** 
   * @const
   * @type {number}
   */
  var popupValidName = 0;

/** 
   * @const
   * @type {number}
   */
  var popupValidEmail = 0;

  //проверка изначальных состояний и валидация формы при загрузке стрницы
  //поле телефон
  var $inputedPhonePopup = $('.popup-report__form [name=phone]').val();
  if (Inputmask.isValid($inputedPhonePopup, {
      alias: "+7 (999) 999-9999"
    })) {
    var popupValidPhone = 1;
    $('.popup-report__form [name=phone]').parent().removeClass('popup-report__required');
    $('.popup-report__form [name=phone]').parent().addClass('popup-report__completed');
  };

  //поле имя
  var $inputedNamePopup = $('.popup-report__form [name=name]').val();
  if (Inputmask.isValid($inputedNamePopup, {
      alias: "a{2,20} [aa{2,20}]"
    })) {
    var popupValidName = 1;
    $('.popup-report__form [name=name]').parent().removeClass('popup-report__required');
    $('.popup-report__form [name=name]').parent().addClass('popup-report__completed');
  };


  //поле email
  var $inputedEmailPopup = $('.popup-report__form [name=email]').val();
  if (Inputmask.isValid($inputedEmailPopup, {
      alias: "email"
    })) {
    var popupValidEmail = 1;
    $('.popup-report__form [name=email]').parent().removeClass('popup-report__required');
    $('.popup-report__form [name=email]').parent().addClass('popup-report__completed');
  };


  //добавление маски на поле телефон
  $('#report-phone').inputmask("+7 (999) 999-9999", {
    "onincomplete": function () {
      popupValidPhone = 0;
      $(this).parent().removeClass('popup-report__completed');
      $(this).parent().addClass('popup-report__required');
      //showErr('report-phone', 'popup-report__error');
    },
    "oncomplete": function () {
      popupValidPhone = 1;
      $(this).parent().addClass('popup-report__completed');
      $(this).parent().removeClass('popup-report__required');
    }
  })

  //добавление маски на поле имя
  $('#report-name').inputmask("a{2,20} [aa{2,20}]", {
    "placeholder": " ",
    "showMaskOnHover": false,
    "onincomplete": function () {
      popupValidName = 0;
      $(this).parent().removeClass('popup-report__completed');
      $(this).parent().addClass('popup-report__required');
     
    },
    "oncomplete": function () {
      popupValidName = 1;
      $(this).parent().addClass('popup-report__completed');
      $(this).parent().removeClass('popup-report__required');
     
    }
  });

  //добавление маски на поле email
  $('#report-email').inputmask({
    "alias": "email",
    "onincomplete": function () {
      popupValidEmail = 0;
      $(this).parent().removeClass('popup-report__completed');
      $(this).parent().addClass('popup-report__required');
      //showErr('report-phone', 'popup-report-report__error');
    },
    "oncomplete": function () {
      popupValidEmail = 1;
      $(this).parent().addClass('popup-report__completed');
      $(this).parent().removeClass('popup-report__required');
    }

  })


  //валидация формы при нажатии на кнопку отправить

  $('.popup-report__btn').click(function (evt) {
    //проверка заполненности поля телефон
    if (popupValidPhone === 0) {
      evt.preventDefault();
      //добавление класса анимации
      if ($('.popup-report').hasClass('popup-report__shake')) {
        $('.popup-report').removeClass('popup-report__shake');
      }
      $('.popup-report').addClass('popup-report__shake');
    }
    //проверка заполненности поля телефон
    if (popupValidName === 0) {
      evt.preventDefault();
      //добавление класса анимации
      if ($('.popup-report').hasClass('popup-report__shake')) {
        $('.popup-report').removeClass('popup-report__shake');
      }
      $('.popup-report').addClass('popup-report__shake');
    }
    
    if (popupValidEmail === 0) {
      evt.preventDefault();
      //добавление класа анимации
      if ($('.popup-report').hasClass('popup-report__shake')) {
        $('.popup-report').removeClass('popup-report__shake');
      }
      $('.popup-report').addClass('popup-report__shake');
    }

  });


  //закрытие попапа при отправке формы
  $('.popup-report__form').submit(function () {
    $('.popup-report, .popup-report__overlay').fadeOut(500);
    if ($('.popup-report').hasClass('popup-report__shake')) {
      $('.popup-report').removeClass('popup-report__shake');
    }
  })

  
  //валидация формы подписок
  //----------------------------------------------------------
  /** 
   * @const
   * @type {number}
   */
 
  var subscribeNameValue = 0;
  
  /** 
   * @const
   * @type {number}
   */
 
  var subscribeEmailValue = 0;
  
  
  //поле имя
  var $inputedNameSubscribe = $('.subscribe [name=name]').val();
  if (Inputmask.isValid($inputedNameSubscribe, {
      alias: "a{2,20} [aa{2,20}]"
    })) {
    var subscribeNameValue = 1;
  };


  //поле email
  var $inputedEmailSubscribe = $('.subscribe [name=email]').val();
  if (Inputmask.isValid($inputedEmailPopup, {
      alias: "email"
    })) {
    var subscribeEmailValue = 1;
  };
  
  
  //добавление маски на поле имя
  $('.subscribe [name=name]').inputmask("a{2,20} [aa{2,20}]", {
    "placeholder": " ",
    "showMaskOnHover": false,
    "onincomplete": function () {
      subscribeNameValue = 0;
    },
    "oncomplete": function () {
      subscribeNameValue = 1;
      $(this).removeClass('subscribe__required');
    }
  });

  //добавление маски на поле email
  $('.subscribe [name=email]').inputmask({
    "alias": "email",
    "onincomplete": function () {
      subscribeEmailValue = 0;
      
    },
    "oncomplete": function () {
      subscribeEmailValue = 1;
      $(this).removeClass('subscribe__required');
    },
    "showMaskOnHover": false
  })

  //валидация формы при нажатии на кнопку отправить

  $('.subscribe__btn').click(function (evt) {
    //проверка заполненности поля телефон
    if (subscribeNameValue === 0) {
      evt.preventDefault();
      $('.subscribe [name=name]').addClass('subscribe__required');
    }
    //проверка заполненности поля email
    
    if (subscribeEmailValue === 0) {
      evt.preventDefault();
      $('.subscribe [name=email]').addClass('subscribe__required');
    }

  });
 
})
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

'use strict';

function addBookmarku() {
  var title = '"Биржа Бизнеса" - продажа готового бизнеса';
  var href = 'http://www.proday-biznes.ru/';

  if (document.all) {
    window.external.AddFavorite(href, title);
  } else {
    if (window.sidebar) {
      window.sidebar.addPanel(title, href, "")
    } else alert("Нажмите CTRL-D, чтобы добавить страницу в закладки.");
  }
}
