'use strict';

$(document).ready(function() {
  //добавление класса активности при заполненнии


  function showActive(elem) {
    $('.form-create__field:visible').each(function() {
    if ((($(elem).scrollTop() + 150) > $(this).offset().top) && (($(elem).scrollTop() + 150) < ($(this).offset().top + $(this).innerHeight()))){
       setActive($(this).attr('data-role'));
     }
   })
  }

  /*
  функция показа активности
  */
  /**
  @param {string} elem data-role раздела (short-describe, finance..)
  */
  function setActive(elem) {
    var formElem = $('.form-status__item');
    formElem.each(function() {
      $(this).removeClass('form-status__item--active');
    })
    $('.form-status__item[data-role=' + elem +']').addClass('form-status__item--active');

  }



  $(window).scroll(function(){
    var self = this;
    showActive(self)
  })



  //изменение статуса заполненности
  function changeItem(inputs, role, data) {
    var inputs = $(inputs);

    var count = 0;
    inputs.each(function() {
      if (!($(this).val() === '') &&  !($(this).val() === null)) {
        count++;
      }
    })

    setTimeout(function(){
      if (count === 0) {
        changeStatus(role, '', data);
      } else if (count > 0 && count <inputs.length) {
        changeStatus(role, 'form-status__item--half', data);
      } else if (count === inputs.length) {
        changeStatus(role, 'form-status__item--full', data);
      }
    },50)

    inputs.change(function() {
      var count = 0;
      inputs.each(function() {
        if (!($(this).val() === '') &&  !($(this).val() === null)) {
          count++;
        }
      })

      setTimeout(function(){
        if (count === 0) {
          changeStatus(role, '', data);
        } else if (count > 0 && count <inputs.length) {
          changeStatus(role, 'form-status__item--half', data);
        } else if (count === inputs.length) {
          changeStatus(role, 'form-status__item--full', data);
        }
      },50)
    })

  }

  changeItem('.form-create__field[data-role=short-describe] input, .form-create__field[data-role=short-describe] select[data-valid=franchise-area]', 'short-describe');

  changeItem('[data-valid=name], [data-valid=main-phone], [data-valid=main-email], .form-create__field[data-role=persone] input[type=file]', 'persone');

  changeItem('.form-create__field[data-role=describe] textarea', 'describe');

  changeItem('.form-create__field[data-role=photo] input', 'photo');


  changeItem('.form-create__field[data-role=finance] input', 'finance');





  /*
  функция измненения статуса
  */
  /**
  @param {string} elem data-role раздела (short-describe, finance..)
  @param {string} status статус раздела (form-status__item--full, form-status__item--half, '')
  @param {string} data полная или краткая форма (short-form, full-form)
  */
  function changeStatus(elem, status, data) {
    var formElem = $('.form-status__item[data-role=' + elem +']');
    formElem
      .removeClass('form-status__item--full')
      .removeClass('form-status__item--half')
      .addClass(status)
    var icon = formElem.find('i');
    if (status === '') {
      icon.removeClass('fa-check-circle').addClass('fa-check-circle-o');
    } else {
      icon.removeClass('fa-check-circle-o').addClass('fa-check-circle');
    }
  }






})
