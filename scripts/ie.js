'use strict';
//если браузер ie8 и меньше
$(document).ready(function(){
 
  $('body').css('min-width', '700');
  
 /*обнуление полей у крайних элементов блоков каталога*/
  function changeMargin(count, percent) {
    $('.franchise-item').each(function( index, element ){
      $(this).css('margin-right', percent);
      if ((index+1)%count == 0 ){
        $(this).css('margin-right', '0');
      }
    })
  }
  
  function setMargin() {
   if ($(window).innerWidth() > 1200) {
      changeMargin(3, '5.8%')
   } else if ($(window).innerWidth() < 1200 && $(window).innerWidth() > 1050) {
      changeMargin(2, '11%')
    } else if ($(window).innerWidth() <= 1050 && $(window).innerWidth() > 985){
      changeMargin(2, '4%')
    } else if ($(window).innerWidth() <= 985 && $(window).innerWidth() > 900) {
      changeMargin(3, '5.8%')
    } else if ($(window).innerWidth() <= 900 && $(window).innerWidth() > 700) {
      changeMargin(3, '2%')
    }  else if ($(window).innerWidth() <= 700) {
      changeMargin(2, '13%')
    }
  }
  
  
  setMargin();
  
  $(window).resize(function() {
    setMargin();
  })
  //подключение плагина для показа placeholder полей
  $('input').placeholder();
  
  //вывод сообщения о ie7 и ниже
  if (document.all && !document.querySelector) {
    alert('Данная страница не поддерживает браузеры IE7 и ниже');
  }
})