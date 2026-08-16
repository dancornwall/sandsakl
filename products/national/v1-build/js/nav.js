// Minimal, progressive-enhancement mobile nav toggle.
// No framework, no build step — editable in plain JS by a volunteer.
(function () {
  var toggle = document.querySelector('.nav__toggle');
  var list = document.getElementById('navlist');
  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var open = list.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var footerToggles = document.querySelectorAll('.foot__toggle');
  if (!footerToggles.length) return;

  var compactFooter = window.matchMedia('(max-width: 1023px)');

  function setFooterMode() {
    footerToggles.forEach(function (footerToggle) {
      var links = document.getElementById(footerToggle.getAttribute('aria-controls'));
      if (!links) return;

      if (compactFooter.matches) {
        footerToggle.tabIndex = 0;
        footerToggle.setAttribute('aria-expanded', 'false');
        links.hidden = true;
      } else {
        footerToggle.tabIndex = -1;
        footerToggle.setAttribute('aria-expanded', 'true');
        links.hidden = false;
      }
    });
  }

  footerToggles.forEach(function (footerToggle) {
    footerToggle.addEventListener('click', function () {
      if (!compactFooter.matches) return;

      var links = document.getElementById(footerToggle.getAttribute('aria-controls'));
      if (!links) return;

      var open = footerToggle.getAttribute('aria-expanded') === 'true';
      footerToggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      links.hidden = open;
    });
  });

  if (compactFooter.addEventListener) {
    compactFooter.addEventListener('change', setFooterMode);
  } else {
    compactFooter.addListener(setFooterMode);
  }

  setFooterMode();
})();
