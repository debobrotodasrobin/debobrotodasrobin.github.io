/* Based on vCard Personal Portfolio by codewithsadee (MIT License)
   https://github.com/codewithsadee/vcard-personal-portfolio */
'use strict';

// sidebar toggle (mobile)
var sidebar = document.querySelector('[data-sidebar]');
var sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebar && sidebarBtn) {
  var label = sidebarBtn.querySelector('span');
  var baseText = label ? label.innerText.replace(/^Show\s/, '') : '';
  sidebarBtn.addEventListener('click', function () {
    var open = sidebar.classList.toggle('active');
    sidebarBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (label) label.innerText = (open ? 'Hide ' : 'Show ') + baseText;
  });
}

// homepage tab switching
var navLinks = document.querySelectorAll('[data-nav-link]');
var pages = document.querySelectorAll('[data-page]');

if (navLinks.length && pages.length) {
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      var target = this.innerText.trim().toLowerCase();

      pages.forEach(function (page) {
        page.classList.toggle('active', page.dataset.page === target);
      });
      navLinks.forEach(function (l) {
        l.classList.toggle('active', l === link);
      });

      window.scroll({ top: 0, behavior: 'smooth' });
    });
  });
}
