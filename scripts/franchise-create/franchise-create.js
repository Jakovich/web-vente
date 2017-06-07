'use strict';
$(document).ready(function() {
  var WIDTH = 985;
  /*открытие и закрытие вкладок страницы*/
  //для узких экранов открывается короткая форма
  if ((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > WIDTH) {
    $('[data-formcontent=full]').show();
    $('.franchise-create__menu-item').removeClass('franchise-create__menu-item--active');
    $('a[data-formlink=full]').parent().addClass('franchise-create__menu-item--active');
  } else {
  $('[data-formcontent=full]').hide();
    $('.franchise-create__menu-item').removeClass('franchise-create__menu-item--active');
    $('a[data-formlink=short]').parent().addClass('franchise-create__menu-item--active');
  }

  $('.franchise-create__menu-item a').click(function(evt) {
    evt.preventDefault();
    $('.franchise-create__menu-item').removeClass('franchise-create__menu-item--active');
    $(this).parent().addClass('franchise-create__menu-item--active');
    if (this.dataset.formlink === 'full') {
      $('[data-formcontent=full]').show();
    } else {
      $('[data-formcontent=full]').hide();
    }


  })

  //скрытие и показ поля с ФИО
  $('.form-create__add-btn--show').click(function(evt){
    (evt.preventDefault) ? evt.preventDefault() : evt.returnValue = false;
    var currentWrp = $(this).closest('.form-create__field');
    var currentInputs = currentWrp.find('.form-create__add-item');
    var currentBtn = currentWrp.find('.form-create__add-btn--hide');
    currentInputs.slideToggle(300);

    $(this).hide();
    currentBtn.show();
  })

  $('.form-create__add-btn--hide').click(function(evt){
    (evt.preventDefault) ? evt.preventDefault() : evt.returnValue = false;
    var currentWrp = $(this).closest('.form-create__field');
    var currentInputs = currentWrp.find('.form-create__add-item');
    var currentBtn = currentWrp.find('.form-create__add-btn--show');
    currentInputs.slideToggle(300);
    $(this).hide();
    currentBtn.show();
  })


  $('.right-sticky').stick_in_parent({offset_top: 40});
})
