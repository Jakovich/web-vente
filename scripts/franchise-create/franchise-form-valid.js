'use strict';
$(document).ready(function() {

  //функция валидации и масок на обязательные поля
  function checkCreateForm(elem) {
    var franchiseValue = 0;
    var areaValue = 0;
    var investValue = 0;
    var nameValue = 0;
    var phoneValue = 0;

    var franchiseInput = $(elem + ' [data-valid=franchise-name]');
    var areaInput = $(elem + ' [data-valid=franchise-area]');
    var investInput = $(elem + ' [data-valid=franchise-investments]');
    var nameInput = $(elem + ' [data-valid=name]');
    var phoneInput = $(elem + ' [data-valid=main-phone]');
    var submitBtn = $(elem + ' .form-create__btn');
    //проверка загруженных значений
    //имя
    if (Inputmask.isValid(nameInput.val(), {
        alias: "a{2,20} [aa{2,20}]"
      })) {
      nameValue = 1;
    };


    //обязательное поле название франшизы

    if (/\S/.test(franchiseInput.val())) {
      franchiseInput.parent().removeClass('input-required');
      franchiseInput.parent().addClass('input-completed');
      franchiseValue = 1;
    }


    franchiseInput.change(function() {

      hideErrMsg($(this));

      if (/\S/.test($(this).val())) {
        $(this).parent().removeClass('input-required');
        $(this).parent().addClass('input-completed');
        franchiseValue = 1;
      } else {
        $(this).parent().addClass('input-required');
        $(this).parent().removeClass('input-completed');
        franchiseValue = 0;
      }
    })


  //обязательный селект направления
    if(areaInput.val()) {
      areaInput.parent().removeClass('input-required');
      areaInput.parent().addClass('input-completed');
      areaValue = 1;
    }

    areaInput.change(function(){
      hideErrMsg($(this));
      if($(this).val()) {
        $(this).parent().removeClass('input-required');
        $(this).parent().addClass('input-completed');
        areaValue = 1;
      } else {
        $(this).parent().addClass('input-required');
        $(this).parent().removeClass('input-completed');
        areaValue = 0;
      }
    })


   //обязательно поле инвестиций

    if (investInput.val() === '' || investInput.val() < 999) {
      investInput.parent().addClass('input-required');
      investInput.parent().removeClass('input-completed');
      investInput.val('');
    } else {

    investValue = 1;
      investInput.parent().removeClass('input-required');
      investInput.parent().addClass('input-completed');
    };
    //инициализация плагина priceFormat
    investInput.priceFormat({
      prefix: '',
      thousandsSeparator: ' ',
      centsSeparator: '',
      centsLimit: 0
    });

      investInput.blur(function(){
        if($(this).val() === '0') {
          $(this).val('');
        }
      })


    investInput.change(function() {
      if (investInput.val() === '' || investInput.val() < 999) {
        investInput.parent().addClass('input-required');
        investInput.parent().removeClass('input-completed');
        showErrMsg(investInput, 'Введите сумму не меньше 999', 'form-create__errorMsg form-create__errorMsg--absolute');
        investValue = 0;
        investInput.val('');
      } else {
        hideErrMsg($(this));
        investValue = 1;
        investInput.parent().removeClass('input-required');
        investInput.parent().addClass('input-completed');
      };
    })


  //обязательное поле имя владельца
    if (Inputmask.isValid(nameInput.val(), {
        alias: "a{1,20}[ ][a{1,20}[ ][a{1,20}]"
      })) {
      nameValue = 1;
      nameInput.parent().removeClass('input-required');
      nameInput.parent().addClass('input-completed');
      };
      nameInput.inputmask("a{1,20}[ ][aa{1,20}[ ][aa{1,20}]", {
      "onincomplete": function () {
        $(this).parent().removeClass('input-completed');
        $(this).parent().addClass('input-required');
        nameValue = 0;
      },
      "oncomplete": function () {
        $(this).parent().removeClass('input-required');
        $(this).parent().addClass('input-completed');
        nameValue = 1;
      },
      "onKeyValidation": function () {
        $(this).parent().removeClass('input-required');
        hideErrMsg($(this));
      },
      "placeholder": " ",
      "showMaskOnHover": false
    });

  //обязательное поле телефона

    if (Inputmask.isValid(phoneInput.val(), {
      alias: "+7 (999) 999-9999"
    })) {
      phoneValue = 1;
      phoneInput.parent().removeClass('input-required');
      phoneInput.parent().addClass('input-completed');
    } else {
      phoneInput.parent().addClass('input-required');
      phoneInput.parent().removeClass('input-completed');
      phoneInput.closest('.form-create__item').find('.form-create__add-btn').addClass('form-create__add-btn--inactive');

    };
    //маска на поле основного телефон
    phoneInput.inputmask("+7 (999) 999-9999", {
      "onincomplete": function () {
        $(this).parent().removeClass('input-completed');
        $(this).parent().addClass('input-required');
        $(this).closest('.form-create__item').find('.form-create__add-btn').addClass('form-create__add-btn--inactive');
        phoneValue = 0;
      },
      "oncomplete": function () {
        phoneValue = 1;
        $(this).parent().removeClass('input-required');
        $(this).parent().addClass('input-completed');
        var valid = 0;
        $(this).closest('.form-create__item').find('.form-create__inp-wrp--phone:visible').each(function() {
          if (!($(this).is('.input-completed'))) {
            valid = 1;
          }
        })
        if (valid === 0) {
          $(this).closest('.form-create__item').find('.form-create__add-btn').removeClass('form-create__add-btn--inactive');
        }
      },
      "onKeyValidation": function () {
        $(this).parent().removeClass('input-required');
        hideErrMsg($(this));
      }
    });


    //запрет отправки формы

    submitBtn.click(function (evt) {

      if (franchiseValue === 0) {
        stopSubmit(franchiseInput, evt);

        return;
      }

      if (investValue === 0) {
        stopSubmit(investInput, evt);
        return;
      }
      if (areaValue === 0) {
        stopSubmit(areaInput, evt);
        return;
      }
      if (nameValue === 0) {
        stopSubmit(nameInput, evt);
        return;
      }
      if (phoneValue === 0) {
        stopSubmit(phoneInput, evt);
        return;
      }

    });

  }
  checkCreateForm('.form-create');



  function validAddInput() {

    //поля с годами
    $('.form-create [data-valid=year]').each(function(){
      var $inputedValue = $(this).val();
      if (Inputmask.isValid($inputedValue, {
        alias: "9999"
      })) {
        $(this).parent().addClass('input-completed');

      }

      $(this).inputmask("9999", {
      "onincomplete": function () {
        $(this).parent().removeClass('input-completed');


      },
      "oncomplete": function () {
        $(this).parent().addClass('input-completed');

      },
      "placeholder": " ",
      "showMaskOnHover": false,
      "clearIncomplete": true,
      "onKeyValidation": function () {
        hideErrMsg($(this));
      }
      });
        //выведение сообщения об ошибке
      $(this).blur(function(){
        var self = this;
        if($(this).val() === '') {
          showErrMsg($(this), 'Введите четырехзначное число', 'form-create__errorMsg form-create__errorMsg--absolute');
          setTimeout(function() {hideErrMsg($(self))}, 7000);
        }
      })

    })

  //поля с количеством
  $('.form-create [data-valid=quantity]').each(function(){
    var $inputedValue = $(this).val();
    if (Inputmask.isValid($inputedValue, {
        alias: "9[99999]"
      })) {
      $(this).parent().addClass('input-completed');
    }

    $(this).inputmask("9[99999]", {
    "onincomplete": function () {
      $(this).parent().removeClass('input-completed');

    },
    "oncomplete": function () {
      $(this).parent().addClass('input-completed');

    },

    "placeholder": " ",
    "showMaskOnHover": false

    });

  });



  //необязательные поля с суммами

   $('[data-valid=textarea]').each(function(){
     var self = $(this);
     if (/\S/.test($(this).val())) {

       $(this).parent().addClass('input-completed');
     }

     $(this).change(function() {
      if (/\S/.test($(this).val())) {

        $(self).parent().addClass('input-completed');
      } else {

        $(self).parent().removeClass('input-completed');
      }
    })
     $(this).keypress(function() {
     if (/\S/.test($(this).val())) {

       $(self).parent().addClass('input-completed');
     } else {

       $(self).parent().removeClass('input-completed');
     }
   })


   })


    /*добавление маски на все телефоны кроме главного*/

 $('.form-create__inp-wrp--phone .form-create__input').each(function(){
   if(!(this.dataset.valid === 'main-phone')) {
     var $inputedPhone = $(this).val();
    if (Inputmask.isValid($inputedPhone, {
      alias: "+7 (999) 999-9999"
    })) {
      $(this).parent().addClass('input-completed');
    } else {
      if($(this).parent().is(':visible')) {
        $(this).closest('.form-create__ident-row').find('.form-create__add-btn').addClass('form-create__add-btn--inactive');
      }
    };
    //маска на поле телефон
    $(this).inputmask("+7 (999) 999-9999", {
    "onincomplete": function () {
      $(this).parent().removeClass('input-completed');
      $(this).closest('.form-create__item').find('.form-create__add-btn').addClass('form-create__add-btn--inactive');

    },
    "oncomplete": function () {
      $(this).parent().addClass('input-completed');
      var valid = 0;
      $(this).closest('.form-create__item').find('.form-create__inp-wrp--phone:visible').each(function() {
        if (!($(this).is('.input-completed'))) {
          valid = 1;
        }
      })
      if (valid === 0) {
        $(this).closest('.form-create__item').find('.form-create__add-btn').removeClass('form-create__add-btn--inactive');
      }
    },
    "onKeyValidation": function () {
      hideErrMsg($(this));
    }
    });
   }
 })

  /*
    добавление маски на поля email
  */
  var existedEmail = $('.form-create__inp-wrp--email .form-create__input');
  existedEmail.each(function() {
    var $inputedEmail = $(this).val();
    console.log($inputedEmail)
    if (Inputmask.isValid($inputedEmail, {
        alias: "email"
      })) {
      $(this).parent().addClass('input-completed');
      $(this).parent().removeClass('input-important');
    } else {
      if(!($(this).parent().hasClass('form-create__hidden'))) {
        $(this).closest('.form-create__item').find('.form-create__add-btn').addClass('form-create__add-btn--inactive');
      }
      };

  $(this).inputmask({
    'alias': "email",
    "oncomplete": function () {
      $(this).parent().removeClass('input-important');
      $(this).parent().addClass('input-completed');
      var valid = 0;
      $(this).closest('.form-create__item').find('.form-create__inp-wrp--email:visible').each(function() {
        if (!($(this).is('.input-completed'))) {
          valid = 1;
        }
      })
      if (valid === 0) {
        $(this).closest('.form-create__item').find('.form-create__add-btn').removeClass('form-create__add-btn--inactive');
      }
    },
    "onincomplete": function () {
      $(this).parent().removeClass('input-completed');
      if (this.dataset.valid === 'main-email') {
        $(this).parent().addClass('input-important');
      }

      $(this).closest('.form-create__item').find('.form-create__add-btn').addClass('form-create__add-btn--inactive');
    },
    "onKeyValidation": function () {
      hideErrMsg($(this));
    },
    "clearIncomplete": true


  });

  })


   //проверка после загрузки

  function chechLoadedName(elem) {
    var $inputedFirstName = elem.val();
    if (Inputmask.isValid($inputedFirstName, {
      alias: "a{1,20} [a{1,20}]"
    })) {
      $(elem).parent().addClass('input-completed');

    };
  }

  $('[data-valid=full-name]').each(function(){
    chechLoadedName($(this));
  });


  $('[data-valid=full-name]').inputmask("a{2,20} [a{2,20}]", {
    "onincomplete": function () {
      $(this).parent().removeClass('input-completed');
      $(this).parent().addClass('input-important');

    },
    "oncomplete": function () {
      $(this).parent().addClass('input-completed');
      $(this).parent().removeClass('input-important');

    },
    "placeholder": " ",
    "showMaskOnHover": false

  });


  }

  validAddInput();
  //выход из поля при нажатии на enter
  $('.form-create input').keypress(function(event){
    if(event.keyCode == 13){
      event.preventDefault();
      $(this).blur();
    }
  });

  /*
    очистка форм при нажатии на кнопки
  */

  $('#full-form-clear').click(function(evt) {
    evt.preventDefault();
    $('[data-valid=franchise-form]')[0].reset();
    $('[data-valid=franchise-form] input, [data-valid=franchise-form] textarea, [data-valid=franchise-form] select').parent().removeClass('input-completed');

    $('[data-valid=franchise-name], [data-valid=franchise-area], [data-valid=franchise-investments], [data-valid=name],  [data-valid=main-phone]').parent().addClass('input-required');

    hideAdditInput('[data-valid=franchise-form] .form-create__inp-wrp--email');
    hideAdditInput('[data-valid=franchise-form] .form-create__inp-wrp--phone');

  })





   /*скрытие дополнительны номеров, email и сайта
    если нет загруженных значений
  */

  function hideAdditInput(elem) {
    $(elem).each(function() {
        if ($(this).find('input').val() == ''){
        $(this).hide();
      }
    })
    $(elem + ':first').show();
  }
  hideAdditInput('[data-valid=franchise-form] .form-create__inp-wrp--email');
  hideAdditInput('[data-valid=franchise-form] .form-create__inp-wrp--phone');





  /*
  показ дополнителных полей при нажатии на кнопки "добавить..."
  */

  $('.form-create__add-btn--create').on('click', function(evt) {
    evt.preventDefault();
    //если кнопка неактивна наводится фокус на незаполненное поле
    var currentWrapper = $(this).closest('.form-create__item');
    if ($(this).hasClass('form-create__add-btn--inactive')) {

      var currentInputs = currentWrapper.find('.form-create__inp-wrp:visible');
      for (var i = 0; i < currentInputs.length; i++) {
        if (!(currentInputs[i].classList.contains('input-completed'))) {
          var emptyInput = currentInputs[i].querySelector('input');
          emptyInput.focus();
          showErrMsg(emptyInput, 'Заполните, пожалуйста, данное поле', 'contact-form__errorMsg');
          setTimeout(function() {hideErrMsg(emptyInput)}, 7000);
          break;
        }
      }
    } else {
      $(this).addClass('form-create__add-btn--inactive');
      currentWrapper.find('.form-create__inp-wrp:hidden:first').fadeIn(300).removeClass('contact-form__hidden');
      if (!(currentWrapper.find('.form-create__inp-wrp').is(':hidden'))) {
        $(this).fadeOut(300);
      }
    }

  })






  ////////////////////////////
  //вспомогательные функции




  /*
  функция запрета отправки формы
  */

  function stopSubmit(elem, evt) {
    evt.preventDefault();
    elem.addClass('input-required');
    elem.focus();
    showErrMsg(elem, 'Заполните данное поле', 'form-create__errorMsg form-create__errorMsg--absolute')
  }
  /*
  функция добавления сообщения об ошибки
  */
  function showErrMsg(element, msg, className) {
    var topPosition = element.offset().top;
    $('html, body').animate({scrollTop: topPosition - 100}, 500);

    if (!(element.siblings().is('.form-create__errorMsg'))) {
      var errMsg = $("<span/>", {
        "class": className,
        "html": msg
      });

      errMsg.appendTo(element.parent());
      errMsg.fadeIn(500);
    }
  }
  /*
  функция удаления сообщения об ошибки
  */
  function hideErrMsg(elem) {

    if (elem.siblings().is('.form-create__errorMsg')) {
      elem.parent().find('.form-create__errorMsg').fadeOut(400, function() {
        elem.parent().find('.form-create__errorMsg').remove();
      });
    }
  }
})
