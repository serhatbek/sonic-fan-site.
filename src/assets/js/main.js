// *********** TAB JS ********************

const tabBtns = document.querySelectorAll('.tab__header__item');
const tabPanels = document.querySelectorAll('.tab__content');

tabBtns.forEach((item) => {
  item.addEventListener('click', (e) => {
    showTabPanel(e);
  });
});

function showTabPanel(e) {
  e.preventDefault();

  const button = e.currentTarget,
    targetId = button.dataset.targetId,
    target = document.getElementById(targetId);

  tabBtns.forEach((item) => {
    item.classList.remove('active');
  });

  button.classList.add('active');

  tabPanels.forEach((item) => {
    item.classList.remove('active');
  });

  target.classList.add('active');
}

//***************** Slider JS **********************
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
