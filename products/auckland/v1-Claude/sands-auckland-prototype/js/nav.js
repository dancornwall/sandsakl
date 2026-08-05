/* Sands Auckland — the only JS on the site: mobile nav toggle. */
(function () {
  var btn = document.querySelector('.nav__toggle');
  var list = document.querySelector('.nav__list');
  if (!btn || !list) return;

  btn.addEventListener('click', function () {
    var open = list.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && list.classList.contains('is-open')) {
      list.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });
})();
