import Page from './components/page/page.js';

document.addEventListener('DOMContentLoaded', function () {
  const main = document.createElement('main');

  const page = Page();
  document.querySelector('body').appendChild(page.navBar);
  document.querySelector('body').appendChild(page.home);
  document.querySelector('body').appendChild(page.explore);
  document.querySelector('body').appendChild(page.journal);
  document.querySelector('body').appendChild(page.footer);
});
