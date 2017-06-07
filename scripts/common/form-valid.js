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