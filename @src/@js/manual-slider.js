document.addEventListener('DOMContentLoaded', function() {
  $(document).ready(function() {
    var $slideBtns = $('.slide-choose-btns-wrapper__slide-choose-btn');
    var $slideWrapper = $('.how-we-work-section__slide-choose-btns-wrapper');
    var selectedBtnIndex = 0;
  

  
    // Обработчик события mousedown для кнопок внутри блока
    $slideBtns.on('mousedown', function() {
      selectedBtnIndex = $slideBtns.index(this);
      $slideBtns.removeClass('active');
      $(this).addClass('active');
    });

    // Обработчик события для документа
    $(document).on('mousedown', function(event) {
      var $target = $(event.target);
      var isInsideSlideWrapper = $target.closest('.how-we-work-section__slide-choose-btns-wrapper').length > 0;
  
      if (!isInsideSlideWrapper && !$target.is($slideBtns)) {
        setTimeout(function() {
          focusTrap.activate();
          $slideBtns.eq(selectedBtnIndex).focus();
        }, 0);
      }
    });

    // Обработчик события keydown для кнопок
    $slideBtns.on('keydown', function(event) {
      if (event.which === 9) { // Таб
        event.preventDefault();
        var currentIndex = $slideBtns.index(this);
        var nextIndex = event.shiftKey ? currentIndex - 1 : currentIndex + 1;
  
        if (nextIndex >= 0 && nextIndex < $slideBtns.length) {
          $slideBtns.eq(nextIndex).focus();
        }
      }
    });
  });    
});
  $(document).ready(function manualSlider() {
      // Получаем все кнопки выбора слайдов
      const slideButtons = $('.slide-choose-btns-wrapper__slide-choose-btn');
      // Получаем все слайды
      const slides = $('.manual-slider-box__slide-item');
      // Обработчик клика на кнопки выбора слайдов
      slideButtons.click(function slideChoose() {
      const index = $(this).data('step');
        // Скрываем все слайды
      slides.hide();
        // Отображаем выбранный слайд
      $(slides[index]).fadeIn();
      });
  });

