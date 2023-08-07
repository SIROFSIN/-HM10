document.addEventListener('DOMContentLoaded', function() {
  $(document).ready(function() {
    // Получаем все кнопки слайдов
    var $slideBtns = $('.slide-choose-btns-wrapper__slide-choose-btn');
    // Получаем область в которой расположены кнопки (здесь необходимо сохранять фокус)
    var $slideWrapper = $('.how-we-work-section__slide-choose-btns-wrapper');
    // Индекс выбранной кнопки
    var selectedBtnIndex = 0;
    // Установка фокуса на первой кнопке при загрузке страницы
    $slideBtns.eq(0).focus();
  
    // Функция обработки клика (с переводом фокуса)
    $slideBtns.on('click', function() {
      selectedBtnIndex = $slideBtns.index(this);
      $(this).focus();
    });

    // Функция сохранения фокуса внутри заданой области (блока)
    $slideWrapper.on('mousedown', function(event) {
      event.preventDefault();
    });

    // Функция сохранения фокуса на последнем выбранном элементе при клике вне области (блока)
    $(document).on('mousedown', function(event) {
      if (!$(event.target).closest('.how-we-work-section__slide-choose-btns-wrapper').length) {
        setTimeout(function() {
          $slideBtns.eq(selectedBtnIndex).focus(); }, 0);
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

