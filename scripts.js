window.addEventListener('load', setup);

function setup() {
  let filters = document.getElementsByClassName('filters-item');
  for (let item of filters) item.addEventListener('click', () => switchTo(item, filters));
  
  let favorites = document.getElementsByClassName('favorite');
  for (let item of favorites) item.addEventListener('click', () => toggleActive(item));
}

function switchTo(item, allItems) {
  if (!item.classList.contains('selected')) {
    for (let oneItem of allItems) {
      if (oneItem.classList.contains('selected')) {oneItem.classList.remove('selected');}
    }
    item.classList.add('selected');
  }
}

function toggleActive(item) {
  item.classList.toggle('selected');
}