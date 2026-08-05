// Minimal, progressive-enhancement mobile nav toggle.
// No framework, no build step — editable in plain JS by a volunteer.
(function () {
  var toggle = document.querySelector('.nav__toggle');
  var list = document.getElementById('navlist');
  if (!toggle || !list) return;
  toggle.addEventListener('click', function () {
    var open = list.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
