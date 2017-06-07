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