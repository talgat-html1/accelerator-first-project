const faqItems = document.querySelectorAll('.faq__item');
const faqTabs = document.querySelectorAll('.faq__tab');
const faqTabsArray = Array.from(faqTabs);

window.addEventListener('DOMContentLoaded', () => {
  initAccordion();
});

const onButtonClick = (button) => {
  button.addEventListener('click', () => {
    const activeTab = document.querySelector('.faq__tab--active');

    if (activeTab) {
      activeTab.classList.remove('faq__tab--active');
    }
    button.classList.add('faq__tab--active');

    const nextActiveElementTab = button.dataset.faqTab;
    for (const element of faqItems) {
      if (element.dataset.faqEl === nextActiveElementTab) {
        element.classList.add('faq__item--active');
        initAccordion();
      }
      if (element.dataset.faqEl !== nextActiveElementTab) {
        element.classList.remove('faq__item--active');
      }
    }
  });
};

const initFaqTabs = () => faqTabsArray.forEach((button) => onButtonClick(button));

function initAccordion () {
  const currentTabActive = document.querySelector('.faq__item--active');
  const accordionItems = currentTabActive.querySelectorAll('.faq__tab-container');
  const accordionItemsArray = Array.from(accordionItems);
  accordionItemsArray.forEach((element) => {
    const buttonElement = element.querySelector('button');
    buttonElement.addEventListener('click', () => {
      element.classList.toggle('faq__tab-container--opened');
    });
  });
}

initFaqTabs();
