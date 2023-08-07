document.addEventListener('DOMContentLoaded', function() {
  $(document).ready(function() {
    var $slideBtns = $('.slide-choose-btns-wrapper__slide-choose-btn');
    var $slideWrapper = $('.how-we-work-section__slide-choose-btns-wrapper');
    var selectedBtnIndex = 0;
  
    // Установка фокуса на первой кнопке при загрузке страницы
    $slideBtns.eq(0).addClass('active').focus();
  
    // Обработчик события для кнопок внутри блока
    $slideBtns.on('click', function() {
      selectedBtnIndex = $slideBtns.index(this);
      $slideBtns.removeClass('active'); // Убираем активное состояние с других кнопок
      $(this).addClass('active').focus(); // Добавляем активное состояние и устанавливаем фокус на кликнутую кнопку
    });
  
    // Обработчик события для блока, предотвращающий уход фокуса при клике внутри блока
    $slideWrapper.on('mousedown', function(event) {
      event.preventDefault();
    });
  
    // Обработчик события для документа
    $(document).on('mouseup', function(event) {
      var $target = $(event.target);
      var isInsideSlideWrapper = $target.closest('.how-we-work-section__slide-choose-btns-wrapper').length > 0;
  
      if (!isInsideSlideWrapper && !$target.is($slideBtns)) {
        setTimeout(function() {
          $slideBtns.eq(selectedBtnIndex).focus(); // Установка фокуса на сохраненную кнопку через setTimeout
        }, 0);
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

