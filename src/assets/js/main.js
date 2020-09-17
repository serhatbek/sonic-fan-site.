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
