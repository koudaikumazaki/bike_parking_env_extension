const url = location.hostname
switch (url) {
  case "buzzkuri.com":
    const productionBodyElement = document.querySelector('html body');
    productionBodyElement.insertAdjacentHTML('afterbegin', '<p class="production env-message">現在の環境はproduction環境です。</p>');
    break;
  case "staging.buzzkuri.com":
    const stagingBodyElement = document.querySelector('html body');
    stagingBodyElement.insertAdjacentHTML('afterbegin', '<p class="staging env-message">現在の環境はstaging環境です。</p>');
    break;
  case "preview.buzzkuri.com":
    const previewBodyElement = document.querySelector('html body');
    previewBodyElement.insertAdjacentHTML('afterbegin', '<p class="preview env-message">現在の環境はpreview環境です。</p>');
    break;
}