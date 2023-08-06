$(document).ready(function manualSlider() {
    $('#slide-btn-1').focus()
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
