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

//*************** ACCORDION  *******************

const accordionItem = document.querySelectorAll('.accordion__item');
accordionItem.forEach((item) => {
  item.addEventListener('click', (e) => {
    accordionVisible(e);
  });
});

function accordionVisible(e) {
  let target = e.currentTarget;

  if (!target.classList.contains('active')) {
    accordionItem.forEach((item) => {
      item.classList.remove('active');
    });
    target.classList.add('active');
  } else {
    target.classList.remove('active');
  }
}

//**************** MAIN-NAV-LINK COLORED SHADOWS ************************

const mainNavLink = document.querySelectorAll('.main-nav__list-item-link');

mainNavLink.forEach((item) => {
  const linkText = item.innerHTML;
  const parent = item.parentElement;

  const linkShadow1 = document.createElement('span');
  linkShadow1.innerHTML = linkText;
  linkShadow1.classList.add('main-nav__list-item-shadow1');
  parent.appendChild(linkShadow1);

  const linkShadow2 = document.createElement('span');
  linkShadow2.innerHTML = linkText;
  linkShadow2.classList.add('main-nav__list-item-shadow2');
  parent.appendChild(linkShadow2);
});

// *************** DROPDOWN MENU ************************

const dropDownPanel = document.querySelector('.js-dropdown-panel');
const dropDownBtn = document.querySelector('.js-dropdown-btn');
const btnParent = document.querySelector('.main-nav__list-item');

dropDownBtn.addEventListener('click', (e) => {
  e.preventDefault();
  openDropdownMenu(e);
});

function openDropdownMenu() {
  dropDownPanel.classList.toggle('active');
  btnParent.classList.toggle('active');
}

window.addEventListener('load', () => {
  document.addEventListener('click', (e) => {
    onClickDocument(e);
  });
});

function closeDropdownMenu() {
  dropDownPanel.classList.remove('active');
}

function onClickDocument(e) {
  const target = e.target;

  if (dropDownPanel.classList.contains('active')) {
    if (!dropDownPanel.contains(target) && !dropDownBtn.contains(target)) {
      closeDropdownMenu();
    }
  }
}

//************* SIGN IN BUTTON WITH FORM MODAL *******************

const openSignInBtn = document.querySelector('.btn__signIn');
const closeSignInModalBtn = document.querySelector('.close-signIn');

openSignInBtn.addEventListener('click', () => {
  openSignInModal();
});

function openSignInModal() {
  const formModalBox = document.querySelector('.form-modal-wrapper');
  formModalBox.classList.add('active');
}

closeSignInModalBtn.addEventListener('click', () => {
  closeSignInModal();
});

function closeSignInModal() {
  const formModalBox = document.querySelector('.form-modal-wrapper');
  formModalBox.classList.remove('active');
}

//************* LOGIN IN BUTTON WITH FORM MODAL *******************

const openLogInBtn = document.querySelector('.btn__login');
const closeLogInModalBtn = document.querySelector('.close-logIn');

openLogInBtn.addEventListener('click', () => {
  openLogInModal();
});

closeLogInModalBtn.addEventListener('click', () => {
  closeLogInModal();
});

function openLogInModal() {
  const formModalBox = document.querySelector('.login-modal');
  formModalBox.classList.add('active');
}

function closeLogInModal() {
  const formModalBox = document.querySelector('.login-modal');
  formModalBox.classList.remove('active');
}
