'use strict';
$(document).ready(function() {
  //ширина перехода на струтктуру для узких экранов
  var WIDTH  = 985;
  
  //показ и скрытие поля с дополнительныйми фильтрами
  $('.search__filter-btn').click(function(evt) {
    evt.preventDefault();
    var icon = $(this).find('i');
    var filterMain = $('.search__price--main')
    if((window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) <= WIDTH){
      filterMain.slideToggle({
          duration: 300,
          progress: function(){
            setUnlimValue($("#price-range"), '.ionDiv--price');
          },
          complete: function(){
              setUnlimValue($("#price-range"), '.ionDiv--price');
          },
          start: function(){
              setUnlimValue($("#price-range"), '.ionDiv--price');
          }
      })
    }
    var filterAdd = $('.search__price--add');
    filterAdd.slideToggle({
        duration: 300,
        progress: function(){
            setUnlimValue($("#return-range"), '.ionDiv--return');
        },
        complete: function(){
            setUnlimValue($("#return-range"), '.ionDiv--return');
        },
        start: function(){
            setUnlimValue($("#return-range"), '.ionDiv--return');
        }
    });
    icon.toggleClass('fa-angle-up').toggleClass('fa-angle-down');
  });


  function indexOfMy(ar, value, strict) {
    var i = 0,
      L = ar.length;
    if (strict) {
      for (; i < L; i++)
        if (ar[i] === value) return i;
    } else {
      for (; i < L; i++)
        if (ar[i] == value) return i;
    }
    return -1;
  }


  function setUnlim() {
    $('.js-grid-text-6').html('∞');
    return false;
  }


  function setUnlimValue($this, elem) {
    var slider = $this.data("ionRangeSlider");
    if (slider.result.to_value == '10000000' || slider.result.to_value == '10 000 000') {
      $(elem + ' .irs-to').html('∞').css({
        'left': '95%',
        'font-size': '22px',
        'bottom': '-20px'
      });
    } else {
      $(elem + ' .irs-to').css({
        'font-size': '12px',
        'bottom': '-15px'
      });
    }

    if (slider.result.from_value == '10000000' || slider.result.from_value == '10 000 000') {
      $(elem + ' .irs-from').html('∞').css({
        'left': '95%',
        'font-size': '22px',
        'bottom': '-20px'
      });
    } else {
      $(elem + ' .irs-from').css({
        'font-size': '12px',
        'bottom': '-15px'
      });
    }
    var context = $(elem + ' .irs-single');
    if (context) {
      var text = context.html();
      text = text.split('10 000 000').join('<span class="toim">∞</span>');
      text = text.split('10000000').join('<span class="toim">∞</span>');
      context.html(text);
      $(elem + ' .toim').css({
        'left': '95%',
        'font-size': '22px',
        'bottom': '-20px'
      });
    }

    return false;
  }


  function setValues() {
    var data = [];
    var steps = 25000;
    for (var i = 0; i <= 10000000; i += steps) {
      data.push(i);
      if (i >= 500000) {
        steps = 50000;
      }
      if (i >= 2000000) {
        steps = 100000;
      }
      if (i >= 5000000) {
        steps = 500000;
      }
    }
    return data;
  }

  var setValue = setValues();



  //инициализация слайдера цены
  $(function () {
    var range = $("#price-range");
    range.ionRangeSlider({
      hide_min_max: true,
      keyboard: true,
      //from: 0,
      //to: indexOfMy(setValue, 10000000),
      type: 'double',
      step: 1,
      prettify: true,
      grid: false,
      grid_num: 6,
      values: setValue,
      onFinish: function (data) {
        setUnlimValue(range, '.ionDiv--price');
      },
      onChange: function (data) {
        setUnlimValue(range, '.ionDiv--price');
      }
    });
    //setUnlim();
    setUnlimValue(range, '.ionDiv--price');

    range.on("change", function () {
      var $this = $(this);
      setUnlimValue($this, '.ionDiv--price');
    });


    $('.search__price-btn').on('click', function (evt) {
      evt.preventDefault();
      var slider = range.data("ionRangeSlider");
      var value = $(this).attr('data-value');
      var ins = indexOfMy(setValue, value);
      if (ins < 1) {
        ins = 30
      }

      slider.update({
        from: 0,
        to: ins
      });
      if (value == 10000000) {
        setUnlimValue(range, '.ionDiv--price');
      }
      return setUnlim();
    });

  });

  //инициализация слайдера доходов
  $(function () {
    var range = $("#return-range");
    range.ionRangeSlider({
      hide_min_max: true,
      keyboard: true,
      from: 0,
      to: indexOfMy(setValue, 10000000),
      type: 'double',
      step: 1,
      prettify: true,
      grid: false,
      grid_num: 6,
      values: setValue,
      onFinish: function (data) {
        setUnlimValue(range, '.ionDiv--return');
      },
      onChange: function (data) {
        setUnlimValue(range, '.ionDiv--return');
      }
    });
    //setUnlim();
    setUnlimValue(range, '.ionDiv--return');
    
    range.on("change", function () {
      var $this = $(this);
      setUnlimValue($this, '.ionDiv--return');
    });


  });

  $(window).resize(function () {
    
    setUnlimValue($("#return-range"), '.ionDiv--return');
    setUnlimValue($("#price-range"), '.ionDiv--price');
    setInterval(function () {
      setUnlimValue($("#return-range"), '.ionDiv--return');
      setUnlimValue($("#price-range"), '.ionDiv--price');
    }, 50);
  });

    $('.search__price--main')
        .bind('afterShow', function () {
            alert('click');
            setUnlimValue($("#return-range"), '.ionDiv--return');
        });


});
'use strict';
$(document).ready(function() {
  
  //ширина перехода на струтктуру для узких экранов
  var WIDTH  = 985;

  //изменение порядка блоков для узких экранов 
  var offerWrp = $('<div class="offer__wrp"></div>');
  var offerWrpRight = $('<div class="offer__wrp-right"></div>'); 
  
  function changePlace() {
    if(window.innerWidth <= WIDTH){
      $('.breadcrumbs').insertAfter('.search');
      $('.franchise-slider--top').insertAfter('.describe');
      $('.price').insertAfter('.actions');
      offerWrp.insertAfter('.price');
      offerWrp.append(offerWrpRight);
      offerWrp.append($('.offer--left'));
      offerWrpRight.append($('.subscribe'));
      offerWrpRight.append($('.offer--right'));
      
    } else {
      $('.breadcrumbs').insertBefore('.main-content__white-wrp');
      $('.left-sticky').append($('.subscribe'));
      $('.left-sticky').append($('.offer--left'));
      $('.right-sticky').append($('.franchise-slider--top'));
      $('.right-sticky').append($('.offer--right'));
      $('.price').insertAfter('.franchise-slider--new');
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
  
  function showToggle() {
    var menuPosition = $('.main-header__info').offset().top + 27;
    var searchPosition = $('.search').offset().top + 60;
      
    if (menuPosition > searchPosition) {
      $('.main-header__location').css('visibility', 'hidden');
      $('.main-header__toggle').fadeIn();
    } else {
      $('.main-header__location').css('visibility', 'visible');
      $('.main-header__toggle').fadeOut();
    }
  }
  
  $(window).scroll(function(){
    showToggle();
  });
  
  
  
  /*слайдер с баннермаи посередине*/
  $(function() {
  $('.promo-slider__jcarousel')
       .on('jcarousel:reload jcarousel:create', function () {
          var carousel = $(this),
          width = carousel.innerWidth();


          carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
      })
       .jcarousel({
        wrap: 'circular' // Прокрутка по кругу
      }).jcarouselAutoscroll({
        interval: (12 * 1000), // 60 * 100 = 1 минута в милисекундах
        target: '+=1', // На сколько кадров прокручивать за один раз
        autostart: true
      });

    $('.promo-slider__prev')
      .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '-=1'
      });

    $('.promo-slider__next')
      .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '+=1'
      });

    $('.promo-slider__jcarousel').hover(function () {
      $('.jcarousel').jcarouselAutoscroll('stop');
    }, function () {
      $('.jcarousel').jcarouselAutoscroll('start');
    });


   });
  
  /*
  Боковые виджеты
  */
  

  function setSlider(elem, duration) {
    $(elem).jcarousel({
      wrap: 'circular' // Прокрутка по кругу
    }).jcarouselAutoscroll({
      interval: (duration * 1000), // 60 * 100 = 1 минута в милисекундах
      target: '+=1', // На сколько кадров прокручивать за один раз
      autostart: true
    });
  }
  function setSliderBtn(elem) {
    $('.franchise-slider__prev')
      .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '-=1'
      });

    $('.franchise-slider__next')
      .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
      })
      .jcarouselControl({
        target: '+=1'
      });

    $('.franchise-slider__jcarousel').hover(function () {
      $('.jcarousel').jcarouselAutoscroll('stop');
    }, function () {
      $('.jcarousel').jcarouselAutoscroll('start');
    });

    $('.franchise-slider__pagination')
      .on('jcarouselpagination:active', 'a', function () {
        $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function () {
        $(this).removeClass('active');
      })
      .jcarouselPagination();
  }

  setSlider('.franchise-slider--top .franchise-slider__jcarousel', 10);
  if ($('article').is('.franchise-slider--new')) {
    setSlider('.franchise-slider--new .franchise-slider__jcarousel', 8);
  }
  
  setSliderBtn();
  
  
  //инициализация плагина stick
  //внесены изменения в сам плагин для ограничения работы на узких экранах
  $('.left-sticky').stick_in_parent({offset_top: 40});
  $('.right-sticky').stick_in_parent({offset_top: 60});
  
})
  