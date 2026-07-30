const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.textContent = open ? '✕' : '☰';
});
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded','false'); menuBtn.textContent='☰';
}));
const observer = new IntersectionObserver(entries => entries.forEach(e => {if(e.isIntersecting)e.target.classList.add('visible')}), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
