document.addEventListener('DOMContentLoaded', function () {
    let activeAccordion = null;
    let userClosedLastAccordion = false;

    document.querySelectorAll('.accordion-item__q').forEach(function (element) {
        element.addEventListener('click', function () {
            let accordionItemAnswer = element.nextElementSibling;
            let accordionBoxItem = element.closest('.accordion-box__accordion-item');
            let accordionItemButton = accordionBoxItem.querySelector('.accordion-item__button');
            let svgEllipse = accordionItemButton.querySelector('svg ellipse');
            let svgPath = accordionItemButton.querySelector('svg path');

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
                    activeAccordion.classList.remove('active');
                }

                accordionBoxItem.classList.add('active');
                activeAccordion = accordionBoxItem;
                userClosedLastAccordion = false;
            }

            if (accordionItemAnswer.style.maxHeight) {
                accordionItemAnswer.style.maxHeight = null;
                accordionBoxItem.style.marginBottom = '0';
                accordionItemButton.style.transform = 'rotateZ(0deg)';
                element.style.color = '';
                svgEllipse.setAttribute('fill', '#ECECEC');
                svgPath.setAttribute('fill', '#666666');
                activeAccordion = null;
                userClosedLastAccordion = true;

                // Обновим стиль border для последнего неактивного элемента
                updateLastInactiveBorder();
            } else {
                accordionItemAnswer.style.maxHeight = accordionItemAnswer.scrollHeight + 'px';
                accordionBoxItem.style.marginBottom = (parseInt(accordionItemAnswer.style.maxHeight) + 10) + 'px';
                accordionItemButton.style.transform = 'rotateZ(45deg)';
                element.style.color = '#F90';
                svgEllipse.setAttribute('fill', '#F90');
                svgPath.setAttribute('fill', '#FFF');
                activeAccordion = accordionBoxItem;
                userClosedLastAccordion = false;

                // Обновим стиль border для последнего неактивного элемента
                updateLastInactiveBorder();
            }
        });
    });

    // Добавляем обработчик для элементов, которые могут быть закрытыми по клику
    document.addEventListener('click', function (event) {
        if (userClosedLastAccordion) {
            const accordionItem = event.target.closest('.accordion-item__q');
            if (accordionItem) {
                userClosedLastAccordion = false;
            } else {
                // Пользователь кликнул вне аккордеона, закроем последний
                if (activeAccordion) {
                    let activeAccordionAnswer = activeAccordion.querySelector('.accordion-item__a');
                    activeAccordionAnswer.style.maxHeight = null;
                    activeAccordion.style.marginBottom = '0';
                    let activeAccordionButton = activeAccordion.querySelector('.accordion-item__button');
                    let activeSvgEllipse = activeAccordionButton.querySelector('svg ellipse');
                    let activeSvgPath = activeAccordionButton.querySelector('svg path');
                    activeSvgEllipse.setAttribute('fill', '#ECECEC');
                    activeSvgPath.setAttribute('fill', '#666666');
                    activeAccordionButton.style.transform = 'rotateZ(0deg)';
                    activeAccordion.querySelector('.accordion-item__q').style.color = '';
                    activeAccordion = null;

                    // Обновим стиль border для последнего неактивного элемента
                    updateLastInactiveBorder();
                }
            }
        }
    });
});

function updateLastInactiveBorder() {
    const allItems = document.querySelectorAll('.accordion-box__accordion-item');
    const inactiveItems = Array.from(allItems).filter(function (item) {
        return item !== activeAccordion;
    });

    inactiveItems.forEach(function (item) {
        item.style.borderBottom = '';
    });

    if (inactiveItems.length > 0) {
        const lastInactiveItem = inactiveItems[inactiveItems.length - 1];
        lastInactiveItem.style.borderBottom = '1px solid #ccc';
    }
}
