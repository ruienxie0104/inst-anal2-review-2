// app.js — Navigation, theme, KaTeX, image viewer, collapsible sections

// ===== Collapsible Sections =====
function toggleCollapsible(header) {
  const body = header.nextElementSibling;
  const isOpen = body.classList.contains('open');
  if (isOpen) {
    body.classList.remove('open');
    header.classList.remove('open');
  } else {
    body.classList.add('open');
    header.classList.add('open');
  }
}

// ===== KaTeX Rendering =====
function renderMath() {
  if (typeof renderMathInElement === 'function') {
    renderMathInElement(document.body, {
      delimiters: [
        {left: '$$', right: '$$', display: true},
        {left: '$', right: '$', display: false}
      ],
      throwOnError: false
    });
  }
}

// ===== Navigation =====
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.sidebar-nav a');
  const sections = document.querySelectorAll('.section');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.dataset.section;
      if (!targetId) return;
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      sections.forEach(s => s.classList.remove('active'));
      const target = document.getElementById('sec-' + targetId);
      if (target) {
        target.classList.add('active');
        // Re-render KaTeX in newly visible section
        if (typeof renderMathInElement === 'function') {
          renderMathInElement(target, {
            delimiters: [
              {left: '$$', right: '$$', display: true},
              {left: '$', right: '$', display: false}
            ],
            throwOnError: false
          });
        }
      }
      // Close sidebar on mobile
      if (window.innerWidth <= 768) closeSidebar();
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  });

  // Show exam-info by default
  sections.forEach(s => s.classList.remove('active'));
  const defaultSection = document.getElementById('sec-exam-info');
  if (defaultSection) defaultSection.classList.add('active');

  // ===== Image Lightbox =====
  document.addEventListener('click', e => {
    if (e.target.tagName === 'IMG' && e.target.classList.contains('slide-img')) {
      const overlay = document.createElement('div');
      overlay.className = 'lightbox-overlay';
      overlay.innerHTML = '<img src="' + e.target.src + '" alt="">';
      overlay.addEventListener('click', () => overlay.remove());
      document.body.appendChild(overlay);
    }
  });

  // Initial KaTeX render (ensure KaTeX is loaded)
  function tryRenderMath() {
    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.body, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false}
        ],
        throwOnError: false
      });
    } else {
      setTimeout(tryRenderMath, 200);
    }
  }
  tryRenderMath();

  // Initialize quiz if navigating to quiz section
  const quizContainer = document.getElementById('quizContainer');
  if (quizContainer && typeof renderQuizMenu === 'function') {
    renderQuizMenu(quizContainer);
  }
});

// ===== Sidebar Toggle =====
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.querySelector('.sidebar-overlay');
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
}

// ===== Swipe to open sidebar (mobile) =====
(function() {
  let touchStartX = 0;
  let touchStartY = 0;
  const SWIPE_THRESHOLD = 60;
  const EDGE_ZONE = 40;

  document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].clientX;
    touchStartY = e.changedTouches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', function(e) {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchEndX - touchStartX;
    const deltaY = Math.abs(touchEndY - touchStartY);
    const sidebar = document.getElementById('sidebar');
    const isOpen = sidebar.classList.contains('open');

    if (!isOpen && deltaX > SWIPE_THRESHOLD && touchStartX < EDGE_ZONE && deltaY < SWIPE_THRESHOLD) {
      toggleSidebar();
    }
    if (isOpen && deltaX < -SWIPE_THRESHOLD && deltaY < SWIPE_THRESHOLD) {
      closeSidebar();
    }
  }, { passive: true });
})();

// ===== Theme Toggle =====
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}

// Load saved theme
(function() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();