const productSlider = new Swiper('.product-swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  wrapperClass: 'product__slides',
  slideClass: 'card-product',
  navigation: {
    nextEl: '.product__arrow--next',
    prevEl: '.product__arrow--prew',
    disabledClass: 'product__arrow--disable',
  },
});

const joinSlider = new Swiper('.join-swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  wrapperClass: 'product__slides',
  slideClass: 'card-product',
  navigation: {
    nextEl: '.product__arrow--next',
    prevEl: '.product__arrow--prew',
    disabledClass: 'product__arrow--disable',
  },
});

const team = () => {
  const wrapper = document.querySelector(`.team`);
  const cards = wrapper.querySelectorAll(`.team__card:not(:last-child)`);
  const link = wrapper.querySelector(`a.team__card`);

  cards.forEach((el, i) => {
    if (i > 10) {el.style.display = `none`}
  });
  link.addEventListener(`click`, evt => {
    evt.preventDefault();
    evt.target.remove();
    cards.forEach((el, i) => {
      el.style.display = `flex`;
    });
  });
}
team();