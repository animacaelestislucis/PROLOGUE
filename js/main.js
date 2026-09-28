/* ========== PROLOGUE — Shared site logic ========== */
(function () {
  /* ---------- Inject navbar into every page ---------- */
   var navHTML = ''
    + '<nav class="navbar">'
    + '  <a href="home.html" class="logo">'
    + '    <img src="assets/images/logo.png" alt="PROLOGUE Logo">'
    + '    <span>PROLOGUE</span>'
    + '  </a>'

    + '  <div class="nav-links" id="navLinks">'
    + '    <a href="home.html">Home</a>'
    + '    <a href="about.html">About</a>'
    + '    <a href="books.html">Books</a>'
    + '    <a href="activities.html">Activities</a>'
    + '    <a href="events.html">Events</a>'
    + '    <div class="nav-dropdown">'
    + '      <button class="nav-dropdown-toggle" id="moreToggle" aria-haspopup="true" aria-expanded="false">'
    + '        More <i class="fas fa-chevron-down"></i>'
    + '      </button>'
    + '      <div class="nav-dropdown-menu" id="moreMenu">'
    + '        <a href="why-join.html">Why Join</a>'
    + '        <a href="gallery.html">Gallery</a>'
    + '        <a href="membership.html">Membership</a>'
    + '        <a href="contact.html">Contact</a>'
    + '      </div>'
    + '    </div>'
    + '  </div>'

    + '  <div class="nav-actions">'
    + '    <button class="icon-btn" id="themeToggle" aria-label="Toggle dark mode"><i class="fas fa-moon"></i></button>'
    + '    <button class="hamburger" id="hamburger" aria-label="Menu"><i class="fas fa-bars"></i></button>'
    + '  </div>'
    + '</nav>';

  var holder = document.getElementById('nav-placeholder');
  if (holder) holder.innerHTML = navHTML;

  /* ---------- Highlight the current page ---------- */
   var path = window.location.pathname.split('/').pop() || 'home.html';
  var dropdownPages = ['why-join.html', 'gallery.html', 'membership.html', 'contact.html'];
  var activeInDropdown = false;

  // Highlight direct nav links
  document.querySelectorAll('.nav-links > a').forEach(function (a) {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // Highlight dropdown links and mark parent as active
  document.querySelectorAll('.nav-dropdown-menu a').forEach(function (a) {
    if (a.getAttribute('href') === path) {
      a.style.color = 'var(--wine)';
      activeInDropdown = true;
    }
  });

  if (activeInDropdown) {
    var toggle = document.getElementById('moreToggle');
    if (toggle) toggle.classList.add('active');
  }

  /* ---------- Theme toggle ---------- */
  var themeToggle = document.getElementById('themeToggle');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function applyTheme(dark) {
    document.body.classList.toggle('dark', dark);
    if (themeToggle) themeToggle.innerHTML = dark
      ? '<i class="fas fa-sun"></i>'
      : '<i class="fas fa-moon"></i>';
    localStorage.setItem('prologue_theme', dark ? 'dark' : 'light');
  }

  var savedTheme = localStorage.getItem('prologue_theme');
  applyTheme(savedTheme === 'dark' || (!savedTheme && prefersDark.matches));

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      applyTheme(!document.body.classList.contains('dark'));
    });
  }

  /* ---------- Mobile hamburger ---------- */
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      hamburger.innerHTML = navLinks.classList.contains('open')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }
    /* ---------- "More" dropdown ---------- */
  var moreToggle = document.getElementById('moreToggle');
  var moreMenu = document.getElementById('moreMenu');
  if (moreToggle && moreMenu) {
    moreToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = moreMenu.classList.toggle('open');
      moreToggle.setAttribute('aria-expanded', isOpen);
    });
    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!moreToggle.contains(e.target) && !moreMenu.contains(e.target)) {
        moreMenu.classList.remove('open');
        moreToggle.setAttribute('aria-expanded', 'false');
      }
    });
    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        moreMenu.classList.remove('open');
        moreToggle.setAttribute('aria-expanded', 'false');
      }
    });
    // Close on link click
    moreMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        moreMenu.classList.remove('open');
        moreToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { obs.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- Animated counters ---------- */
  var counters = document.querySelectorAll('.stat-number[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    var cObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.dataset.count, 10) || 0;
        var current = 0;
        var step = Math.max(1, Math.floor(target / 40));
        var timer = setInterval(function () {
          current += step;
          if (current >= target) { el.textContent = target; clearInterval(timer); }
          else el.textContent = current;
        }, 30);
        cObs.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { cObs.observe(c); });
  }

  /* ---------- Floating particles on hero ---------- */
  var hero = document.querySelector('.hero');
  if (hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var count = window.innerWidth < 768 ? 8 : 18;
    for (var i = 0; i < count; i++) {
      var p = document.createElement('div');
      p.className = 'particle';
      var size = Math.random() * 6 + 3;
      p.style.cssText =
        'width:' + size + 'px;height:' + size + 'px;' +
        'left:' + (Math.random() * 100) + '%;top:' + (Math.random() * 100) + '%;' +
        'animation-delay:' + (Math.random() * 14) + 's;' +
        'animation-duration:' + (10 + Math.random() * 12) + 's;';
      hero.appendChild(p);
    }
  }
})();