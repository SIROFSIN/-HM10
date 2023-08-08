document.addEventListener('DOMContentLoaded', () => {
    let activeAccordion = null;

    document.querySelectorAll('.accordion-item__q').forEach((element) => {
        element.addEventListener('click', () => {
            let accordionItemAnswer = element.nextElementSibling;
            let accordionBoxItem = element.closest('.accordion-box__accordion-item');
            let accordionItemButton = accordionBoxItem.querySelector('.accordion-item__button'); // Найдем кнопку внутри текущего элемента аккордеона
            let svgEllipse = accordionItemButton.querySelector('svg ellipse'); // Найдем элемент ellipse внутри SVG
            let svgPath = accordionItemButton.querySelector('svg path'); // Найдем элемент path внутри SVG

            if (activeAccordion !== accordionBoxItem) {
                if (activeAccordion) {
                    let activeAccordionAnswer = activeAccordion.querySelector('.accordion-item__a');
                    activeAccordionAnswer.style.maxHeight = null;
                    activeAccordion.style.marginBottom = '0';
                    activeAccordion.querySelector('.accordion-item__q').style.color = '';
                    let activeAccordionButton = activeAccordion.querySelector('.accordion-item__button');
                    let activeSvgEllipse = activeAccordionButton.querySelector('svg ellipse');
                    let activeSvgPath = activeAccordionButton.querySelector('svg path');
                    activeSvgEllipse.setAttribute('fill', '#ECECEC');
                    activeSvgPath.setAttribute('fill', '#666666');
                    activeAccordionButton.style.transform = 'rotateZ(0deg)';
                }

                activeAccordion = accordionBoxItem;
            }

            if (accordionItemAnswer.style.maxHeight) {
                accordionItemAnswer.style.maxHeight = null;
                accordionBoxItem.style.marginBottom = '0';
                accordionItemButton.style.transform = 'rotateZ(0deg)';
                element.style.color = '';
                svgEllipse.setAttribute('fill', '#ECECEC');
                svgPath.setAttribute('fill', '#666666');
                activeAccordion = null;
            } else {
                accordionItemAnswer.style.maxHeight = accordionItemAnswer.scrollHeight + 'px';
                accordionBoxItem.style.marginBottom = (parseInt(accordionItemAnswer.style.maxHeight) + 10) + 'px';
                accordionItemButton.style.transform = 'rotateZ(45deg)';
                element.style.color = '#F90';
                svgEllipse.setAttribute('fill', '#F90'); // Применяем новый цвет для ellipse
                svgPath.setAttribute('fill', '#FFF'); // Применяем новый цвет для path
                activeAccordion = accordionBoxItem;
            }
        });
    });
});



