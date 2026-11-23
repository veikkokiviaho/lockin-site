// Kieli: ?lang=fi|en, sitten tallennettu valinta, sitten selaimen kieli (suomi → fi, muuten en).
(function () {
  var q = new URLSearchParams(location.search).get('lang');
  var saved = null;
  try { saved = localStorage.getItem('lockin-lang'); } catch (e) {}
  var lang = q || saved || ((navigator.language || 'en').toLowerCase().indexOf('fi') === 0 ? 'fi' : 'en');
  if (lang !== 'fi' && lang !== 'en') lang = 'en';
  document.documentElement.lang = lang;
  window.setLang = function (l) {
    document.documentElement.lang = l;
    try { localStorage.setItem('lockin-lang', l); } catch (e) {}
    document.querySelectorAll('.lang button').forEach(function (b) { b.classList.toggle('on', b.dataset.set === l); });
    document.querySelectorAll('[data-src-' + l + ']').forEach(function (img) { img.src = img.getAttribute('data-src-' + l); });
  };
  document.addEventListener('DOMContentLoaded', function () { window.setLang(lang); });
})();
