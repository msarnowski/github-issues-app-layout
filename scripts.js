window.addEventListener('load', setup);

function setup() {
  let filters = document.getElementsByClassName('filters-item');
  for (let item of filters) item.addEventListener('click', () => switchTo(item, filters));
  
  let favorites = document.getElementsByClassName('favorite');
  for (let item of favorites) item.addEventListener('click', () => toggleActive(item));
}

function switchTo(item, allItems) {
  for (let oneItem of allItems) {
    if (oneItem.classList.contains('active')) {oneItem.classList.remove('active');}
  }
  item.classList.add('active');
}

function toggleActive(item) {
  item.classList.toggle('active');
}