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
'use strict';
$(document).ready(function(){
  var rangeOrders = $('#orders');
  var rangeFixedPrice = $('#fixed-price');
  var rangeRoyalty = $('#royalty');
  var rangeMarketing = $('#marketing');
  var benefitResult = $('.create-benefit__result span');
  var locationResult = $('.create-location__result span')
  rangeOrders.ionRangeSlider({
    keyboard: true,
    from: 3,
    min: 1,
    max: 5,
    type: 'single',
    step: 1,
    prettify: true,
    grid: false,     
    onChange: function (data) {
      setLocationValue();
    }
  });
  
  rangeFixedPrice.ionRangeSlider({
    keyboard: true,
    from: 2500000,
    min: 0,
    max: 5000000,
    step: 50000,
    type: 'single',
    postfix: " руб.",
    prettify: true,
    grid: false,     
    onChange: function (data) {
      setBenefitValue();
      setLocationValue();
    }
  });
  
  rangeRoyalty.ionRangeSlider({
    keyboard: true,
    from: 500000,
    min: 0,
    max: 1000000,
    step: 50000,
    type: 'single',
    postfix: ' руб.',
    prettify: true,
    grid: false,     
    onChange: function (data) {
      setBenefitValue();
    }
  });
  
  rangeMarketing.ionRangeSlider({
    keyboard: true,
    from: 100000,
    min: 0,
    max: 200000,
    step: 5000,
    type: 'single',
    postfix: ' руб.',
    prettify: true,
    grid: false,     
    onChange: function (data) {
      setBenefitValue();
    }
  });
  
  $('input[name=population]').on('change', function(){
    setLocationValue();
  });
  
  $('input[name=age]').on('change', function(){
    setLocationValue();
  });
  
  
  setBenefitValue();
  setLocationValue();
  
  
  function setBenefitValue() {
    var fixedPriceValue =  parseInt($('#fixed-price').val(),10);
    var royaltyValue = parseInt($('#royalty').val(),10);
    var marketingValue = parseInt($('#marketing').val(),10);
    var benefit = fixedPriceValue + royaltyValue + marketingValue;
    var benefitThous = benefit.toLocaleString();
    benefitResult.text(benefitThous);
  };
  
  function setLocationValue() {
    var fixedPriceValue =  parseInt($('#fixed-price').val(),10);
    var popuplationValue = parseInt($('input[name=population]:checked').val(),10);
    var ordersValue = parseInt($('#orders').val(),10);
    var ageValue = parseInt($('input[name=age]:checked').val(),10);
    var location = fixedPriceValue * popuplationValue * ordersValue * ageValue;
    var locationThous = location.toLocaleString();
    locationResult.text(locationThous);
  }
  
  
})