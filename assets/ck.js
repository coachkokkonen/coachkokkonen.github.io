(function () {
  'use strict';

  /* Mobiilivalikko */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      document.body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* Headerin varjo vierityksessä */
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Scroll reveal */
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('.reveal');
  if (!reduced && 'IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* Evästesuostumus (Google Analytics) */
  var KEY = 'ck-consent';
  var banner = document.querySelector('.cookie-banner');
  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}

  function grant() {
    if (typeof gtag === 'function') {
      gtag('consent', 'update', { analytics_storage: 'granted' });
    }
  }

  if (saved === 'granted') {
    grant();
  } else if (!saved && banner) {
    banner.classList.add('visible');
    banner.querySelector('.accept').addEventListener('click', function () {
      try { localStorage.setItem(KEY, 'granted'); } catch (e) {}
      grant();
      banner.classList.remove('visible');
    });
    banner.querySelector('.decline').addEventListener('click', function () {
      try { localStorage.setItem(KEY, 'denied'); } catch (e) {}
      banner.classList.remove('visible');
    });
  }
})();
