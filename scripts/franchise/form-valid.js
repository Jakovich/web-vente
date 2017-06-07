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