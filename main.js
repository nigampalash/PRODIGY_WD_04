// Sticky navbar active link & mobile toggle
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const navToggle = document.getElementById('navToggle');
const navLinksContainer = document.querySelector('.nav-links');

navToggle.onclick = () => {
  navLinksContainer.classList.toggle('open');
};

navLinks.forEach(link => {
  link.onclick = function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({ top: target.offsetTop - 60, behavior: 'smooth' });
      navLinksContainer.classList.remove('open');
    }
  };
});

// Highlight nav link on scroll
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 70;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Fade-in on scroll
function revealOnScroll() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Contact form validation
document.getElementById('contactForm').onsubmit = function(e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  const msgDiv = document.getElementById('formMsg');
  if (!name || !email || !message) {
    msgDiv.textContent = "Please fill in all fields.";
    msgDiv.style.color = "#ffd600";
    return false;
  }
  if (!/^[\w\.-]+@[\w\.-]+\.\w{2,}$/.test(email)) {
    msgDiv.textContent = "Please enter a valid email address.";
    msgDiv.style.color = "#ffd600";
    return false;
  }
  msgDiv.textContent = "Thank you! Your message has been sent.";
  msgDiv.style.color = "#00ff99";
  this.reset();
  return false;
};