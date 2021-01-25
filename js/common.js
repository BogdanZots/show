"use strict";

$(document).ready(function () {
  // menu
  $('.nav').slicknav({
    label: '',
    appendTo: '.header .container'
  }); // Mask

  $("input[name='phone']").mask("+7(999) 999-99-99"); // Fancybox

  $("[data-fancybox]").fancybox({
    animationEffect: "zoom-in-out"
  }); // Slider

  $('.js-preview-info').slick({
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"></button>',
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1700,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 790,
      settings: {
        slidesToShow: 1
      }
    }]
  }); // js-representation

  $('.js-representation').slick({
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"></button>',
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 790,
      settings: {
        slidesToShow: 1
      }
    }]
  }); // js-list-reviews

  $('.js-list-reviews').slick({
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"></button>',
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 790,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.js-intro-slider').slick({
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"></button>',
    infinite: true,
    fade: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  }); // select

  $('.select').each(function () {
    var _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 50; // длительность анимации


    _this.hide();

    _this.wrap('<div class="select"></div>');

    $('<div>', {
      "class": 'new-select',
      text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    var selectHead = _this.next('.new-select');

    $('<div>', {
      "class": 'new-select__list'
    }).insertAfter(selectHead);
    var selectList = selectHead.next('.new-select__list');

    for (var i = 1; i < selectOptionLength; i++) {
      $('<div>', {
        "class": 'new-select__item',
        html: $('<span>', {
          text: selectOption.eq(i).text()
        })
      }).attr('data-value', selectOption.eq(i).val()).appendTo(selectList);
    }

    var selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function () {
      if (!$(this).hasClass('on')) {
        $(this).addClass('on');
        selectList.slideDown(duration);
        selectItem.on('click', function () {
          var chooseItem = $(this).data('value');
          $('select').val(chooseItem).attr('selected', 'selected');
          selectHead.text($(this).find('span').text());
          selectList.slideUp(duration);
          selectHead.removeClass('on');
        });
      } else {
        $(this).removeClass('on');
        selectList.slideUp(duration);
      }
    });
  });
});