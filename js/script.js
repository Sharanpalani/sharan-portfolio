/* ============================================================
   SHARAN P — PORTFOLIO SCRIPT
   Handles: theme toggle, mobile nav, scroll spy, fade-in reveal,
   hero status typing effect, and the contact form (mailto).
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // Enables the scroll fade-in CSS only once JS is confirmed running,
  // so the page never depends on JS to simply be readable.
  document.documentElement.classList.add('js-ready');

  /* ---------------- THEME TOGGLE ---------------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');

  // In-memory theme preference. Swap getSavedTheme/saveTheme to use
  // window.localStorage if you'd like the choice to persist between
  // visits once this is running on your own site (outside a sandboxed
  // preview) — localStorage is intentionally avoided here for portability.
  let inMemoryTheme = null;

  function getSavedTheme() {
    if (inMemoryTheme) return inMemoryTheme;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark ? 'dark' : 'light';
  }
  function saveTheme(theme) {
    inMemoryTheme = theme;
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
    } else {
      root.setAttribute('data-theme', 'light');
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
    }
  }

  applyTheme(getSavedTheme());

  themeToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    saveTheme(next);
  });

  /* ---------------- MOBILE HAMBURGER MENU ---------------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close mobile menu after clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------------- NAVBAR SCROLL STATE ---------------- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 12);
  }, { passive: true });

  /* ---------------- SCROLL SPY (active nav link) ---------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav-link');

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinkEls.forEach(link => {
          link.classList.toggle('active-link', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

  sections.forEach(section => spyObserver.observe(section));

  /* ---------------- FADE-IN ON SCROLL ---------------- */
  const fadeEls = document.querySelectorAll('.fade-in');
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${(index % 3) * 80}ms`;
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  fadeEls.forEach(el => fadeObserver.observe(el));

  /* ---------------- HERO STATUS TYPING EFFECT ---------------- */
  const statusText = document.getElementById('statusText');
  const messages = [
    'STATUS: AVAILABLE FOR SOC ANALYST INTERNSHIPS',
    'FOCUS: NETWORK SECURITY // THREAT DETECTION',
    'LOCATION: HOSUR, TAMIL NADU, INDIA'
  ];

  let msgIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    const current = messages[msgIndex];

    if (!deleting) {
      statusText.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1800);
        return;
      }
    } else {
      statusText.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        msgIndex = (msgIndex + 1) % messages.length;
      }
    }

    setTimeout(typeLoop, deleting ? 28 : 42);
  }

  if (statusText) {
    typeLoop();
  }

  /* ---------------- CONTACT FORM (mailto, no backend) ---------------- */
  const contactForm = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
      formNote.textContent = 'Please fill in all fields before sending.';
      formNote.style.color = 'var(--warning)';
      return;
    }

    // No backend is connected. We build a mailto: link so the message
    // opens directly in the user's own email client, addressed to Sharan.
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailtoLink = `mailto:sharan7384681@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    formNote.textContent = 'Opening your email client to send this message...';
    formNote.style.color = 'var(--success)';
  });

  /* ---------------- PROJECT DETAILS (placeholder scroll) ---------------- */
  document.querySelectorAll('.project-details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Currently shows the tech stack already listed on the card.
      // Replace this with a modal or a dedicated project page later.
      btn.closest('.project-body').querySelector('.tag-list').scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

});
