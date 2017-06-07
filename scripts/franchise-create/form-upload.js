'use strict';

$(document).ready(function(){
  //поле презентации 
  $('#franchise-presentation').change(function(){
    var filename = $(this).val().replace(/.*\\/, "");
    $('#presenatation-path').html(filename);
    $(".form-create__upload-wrp--presentation").hide();
    $(".form-create__upload-result--present").fadeIn();
  });
  
  $('#presentation-remove').click(function(evt){
    evt.preventDefault();
    $(".form-create__upload-wrp--presentation").fadeIn();
    $(".form-create__upload-result--present").hide();
    $('#franchise-presentation').val('');
  })
  
  //логотип
  function readURL(input) {
    if (input.files && input.files[0]) {
    var reader = new FileReader();
    var currentWrp = $(input).closest('.form-create__upload-item');
    
    reader.onload = function (e) {
      currentWrp.find('img').attr('src', e.target.result);
      currentWrp.find('.form-create__upload-result').fadeIn(300);
      currentWrp.find('.form-create__upload-wrp').hide();
    }
            
      reader.readAsDataURL(input.files[0]);
    }
  }
  
   $("#franchise-logo").change(function(){
    readURL(this); 
  });
   
  $('#logo-remove').click(function(evt){
    evt.preventDefault();
    $(".form-create__upload-wrp--logo").fadeIn();
    $(".form-create__upload-result--logo").hide();
    $('#franchise-logo').val('');
  });
  
  

})