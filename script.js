const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
function closeMenu(){navLinks?.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false');if(menuToggle)menuToggle.textContent='☰';}
menuToggle?.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'✕':'☰';});
navLinks?.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
document.addEventListener('click',event=>{if(menuToggle&&navLinks&&!menuToggle.contains(event.target)&&!navLinks.contains(event.target))closeMenu();});
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
if('IntersectionObserver' in window){const links=[...document.querySelectorAll('.nav-links a')];const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){links.forEach(link=>link.classList.toggle('active',link.getAttribute('href')==='#'+entry.target.id));}}},{rootMargin:'-30% 0px -55% 0px'});document.querySelectorAll('main section[id]').forEach(section=>observer.observe(section));}
