const url = location.hostname
switch (url) {
  case "bike-parking-search.com":
    const productionBodyElement = document.querySelector('html body');
    productionBodyElement.insertAdjacentHTML('afterbegin', '<p class="production env-message">現在の環境はproduction環境です。</p>');
    break;
  case "staging-bike-parking-search.herokuapp.com/":
    const stagingBodyElement = document.querySelector('html body');
    stagingBodyElement.insertAdjacentHTML('afterbegin', '<p class="staging env-message">現在の環境はstaging環境です。</p>');
    break;
  case "localhost:3000/":
    const developmentBodyElement = document.querySelector('html body');
    developmentBodyElement.insertAdjacentHTML('afterbegin', '<p class="development env-message">現在の環境はdevelopment環境です。</p>');
    break;
}