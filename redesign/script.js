'use strict';
const menu = document.querySelector('.menu');
const links = document.querySelector('#navlinks');
if (menu && links) {
  function closeMenu() { links.classList.remove('open'); menu.setAttribute('aria-expanded','false'); menu.setAttribute('aria-label','Open navigation'); }
  menu.addEventListener('click', () => { const open = links.classList.toggle('open'); menu.setAttribute('aria-expanded',String(open)); menu.setAttribute('aria-label',open?'Close navigation':'Open navigation'); });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e => { if(e.key==='Escape') closeMenu(); });
}
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
if ('IntersectionObserver' in window) {
  const anchors = [...document.querySelectorAll('.navlinks a')];
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if(entry.isIntersecting) anchors.forEach(a => { const active = a.getAttribute('href') === '#' + entry.target.id; a.classList.toggle('active',active); if(active) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current'); }); }); }, {rootMargin:'-20% 0px -65% 0px'});
  document.querySelectorAll('main section[id]').forEach(s => observer.observe(s));
}
