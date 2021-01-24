let windowWidth = window.innerWidth;
let productSlider = undefined;
let joinSlider = undefined;

function initSwiper() {
  windowWidth = window.innerWidth;
  if (windowWidth >= 991) {
    if(productSlider !== undefined) return;
    productSlider = new Swiper('.product-swiper', {
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
    
    joinSlider = new Swiper('.join-swiper', {
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
  } else {
    if(productSlider === undefined) return;
    productSlider.destroy(false, true);
    productSlider = undefined;
    joinSlider.destroy(false, true);
    productSlider = undefined;
  }

}
initSwiper();

window.addEventListener(`resize`, () => {
  initSwiper();
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
    link.remove();
    cards.forEach((el, i) => {
      el.style.display = `flex`;
    });
  });
}
team();


// function initMap() {

//   const icon = {
//     scaledSize: new google.maps.Size(38, 55), 
//     url: './../img/pin.svg'
//   }

//   let map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 55.65001347053159, lng: 37.539977099920804 },
//     zoom: 17,
//   });

//   let marker = new google.maps.Marker({
//     position: {lat: 55.65001347053159, lng: 37.539977099920804},
//     map: map,
//     icon: icon,
    
//   });
// }
