const priceItems = document.querySelectorAll('.price__item');
const priceButtons = document.querySelectorAll('.price__button');
const priceItemsArray = Array.from(priceItems);

function switchingTabs (button) {
  const nextActiveButtonTab = button.dataset.tab;

  priceItemsArray.forEach((item) => {
    const contentTabAll = item.querySelectorAll('.price__content');
    contentTabAll.forEach((content) => {
      const nextActiveContentTab = content.dataset.price;
      return (nextActiveContentTab === nextActiveButtonTab)
        ? content.classList.add('price__content--active')
        : content.classList.remove('price__content--active');
    });
  });
}

const onPriceButtonClick = () => {
  priceButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const prevActiveButton = document.querySelector('.price__button--active');
      if (prevActiveButton) {
        prevActiveButton.classList.remove('price__button--active');
      }
      button.classList.add('price__button--active');
      switchingTabs(button);
    });
  });
};

const onPriceButtonHover = () => {
  priceItems.forEach((item) => {
    const link = item.querySelector('.price__link');

    link.addEventListener('mouseover', () => {
      item.classList.add('price__item--hover');
    });

    link.addEventListener('mouseout', () => {
      item.classList.remove('price__item--hover');
    });

  });
};

export { onPriceButtonClick, onPriceButtonHover };
