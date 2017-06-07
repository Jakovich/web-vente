'use strict';
$(document).ready(function() {
  /*function checkDocumentForm(elem) {
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
      },
      "onKeyValidation": function () {
        hideErrMsg($(this));
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
    },
    "onKeyValidation": function () {
      hideErrMsg($(this));
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
    "showMaskOnHover": false,
    "onKeyValidation": function () {
      hideErrMsg($(this));
    } 
  })
  
  submitBtn.click(function (evt) {
    //проверка заполненности поля телефон
    if (nameValue === 0) {
      evt.preventDefault();
      nameInput.addClass('franchise-documents__required');
      showErrMsg(nameInput, 'Заполните данное поле', 'create-form__errorMsg') 
    }
    
    if (phoneValue === 0) {
      evt.preventDefault();
      phoneInput.addClass('franchise-documents__required');
      showErrMsg(phoneInput, 'Заполните данное поле', 'create-form__errorMsg') 

    }
    //проверка заполненности поля email
    
    if (emailValue === 0) {
      evt.preventDefault();
      emailInput.addClass('franchise-documents__required');
      showErrMsg(emailInput, 'Заполните данное поле', 'create-form__errorMsg') 

    }

  });

  }
  
  checkDocumentForm('.create-intro__form .create-form');
  checkDocumentForm('.create-questions__form .create-form');
  checkDocumentForm('#consult .popup-franchise__form');*/
  
   /*
  функция добавления сообщения об ошибки
  */
  /*function showErrMsg(element, msg, className) {
    
    if (!(element.siblings().is('.form__errorMsg'))) {
      var errMsg = $("<span/>", {
        "class": className,
        "html": msg
      });

      errMsg.appendTo(element.parent());
      errMsg.fadeIn(500);
    }
  }*/
  /*
  функция удаления сообщения об ошибки
  */
  /*function hideErrMsg(elem) {
    
    if (elem.siblings().is('.form__errorMsg')) {
      elem.parent().find('.form__errorMsg').fadeOut(400, function() {
        elem.parent().find('.form__errorMsg').remove();
      });
    }
}*/
    //маска на поля 
  $('input[name=name]').inputmask("a{2,20} [aa{2,20}]", {
    "onincomplete": function () {
      $(this).removeClass('input-completed');
      
    },
    
    "oncomplete": function () {
      
      $(this).addClass('input-completed');
      
    },
    "onKeyValidation": function () {
      hideErrMsg($(this));
    },
    "placeholder": " ",
    "showMaskOnHover": false
  });
  
  $('input[name=phone]').inputmask("+7 (999) 999-9999", {
    "onincomplete": function () {
      $(this).removeClass('input-completed');

    },
    "oncomplete": function () {
      $(this).addClass('input-completed');
      
    },
    "onKeyValidation": function () {
     hideErrMsg($(this));
    }
  });
  
  $('input[name=email]').inputmask({
    "alias": "email",
    "onincomplete": function () {
     $(this).removeClass('input-completed');
    },
    "oncomplete": function () {
      $(this).addClass('input-completed');
    },
    "onKeyValidation": function () {
     hideErrMsg($(this));
    }

  })
  
  //проверка сохраненных значений
  
  function checkValid() {
    $('input[name=name]').each(function() {
      if (Inputmask.isValid($(this).val(), {
        alias: "a{2,20} [aa{2,20}]"
        })) {
        $(this).addClass('input-completed');
      };
    });
    
    $('input[name=email]').each(function() {
      if (Inputmask.isValid($(this).val(), {
        alias: "email"
        })) {
        $(this).addClass('input-completed');
      };
    });
    
    $('input[name=phone]').each(function() {
    if (Inputmask.isValid($(this).val(), {
      alias: "+7 (999) 999-9999"
      })) {
    
        $(this).addClass('input-completed');
      };
    });
  }
  
  checkValid();
  
  //запрет отправки сообщения
  
  function formValid(elem) {
    var submitBtn = $(elem).find('button[type=submit]');
    var inputs = $(elem).find('input');
    submitBtn.click(function(evt) {
      inputs.each(function() {
        if (!($(this).hasClass('input-completed'))) {
          evt.preventDefault();
        showErrMsg($(this), 'Заполните данное поле', 'create-form__errorMsg') 

        }
      })
    })
  }
  

  formValid('.create-intro__form .create-form');
  formValid('.create-questions__form .create-form');
  formValid('#consult .popup-franchise__form');
 
  /*
  функция добавления сообщения об ошибки
  */
  function showErrMsg(element, msg, className) {
    
    if (!(element.siblings().is('.create-form__errorMsg'))) {
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
    
    if (elem.siblings().is('.create-form__errorMsg')) {
      elem.parent().find('.create-form__errorMsg').fadeOut(400, function() {
        elem.parent().find('.create-form__errorMsg').remove();
      });
    }
  }

})