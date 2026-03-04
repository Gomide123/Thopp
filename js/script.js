// ====== COOKIE BANNER ======
function closeCookieBanner() {
  document.getElementById('cookie-banner').classList.add('hidden');
  localStorage.setItem('cookiesAccepted', 'true');
}

document.addEventListener('DOMContentLoaded', function () {
  if (localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookie-banner').classList.add('hidden');
  }

  // ====== MOBILE MENU ======
  var menuToggle = document.getElementById('menu-toggle');
  var navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', function () {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  // ====== HEADER TRANSPARENT / SCROLLED ======
  var header = document.getElementById('header');
  var scrollTop = document.getElementById('scroll-top');
  header.classList.add('header--transparent');

  function handleScroll() {
    var scrollY = window.scrollY;
    var heroHeight = document.getElementById('hero').offsetHeight;

    // Header: transparent on hero, solid after
    if (scrollY > heroHeight - 100) {
      header.classList.remove('header--transparent');
      header.classList.add('header--scrolled');
    } else {
      header.classList.add('header--transparent');
      header.classList.remove('header--scrolled');
    }

    // Scroll to top button
    if (scrollY > 600) {
      scrollTop.classList.add('visible');
    } else {
      scrollTop.classList.remove('visible');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  // ====== ACTIVE NAV LINK ON SCROLL ======
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-menu a');

  window.addEventListener('scroll', function () {
    var current = '';
    sections.forEach(function (section) {
      var sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(function (link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // ====== SWIPER: CLIENTES (scroll contínuo suave) ======
  new Swiper('.clientes-swiper', {
    slidesPerView: 8,
    spaceBetween: 20,
    loop: true,
    speed: 2500,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    allowTouchMove: true,
    breakpoints: {
      0: { slidesPerView: 2, spaceBetween: 15 },
      480: { slidesPerView: 3, spaceBetween: 15 },
      768: { slidesPerView: 5, spaceBetween: 20 },
      1024: { slidesPerView: 8, spaceBetween: 20 },
    },
  });

  // ====== SWIPER: SOBRE SERVIÇOS (3 visíveis, com setas) ======
  new Swiper('.sobre-servicos-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    navigation: {
      nextEl: '.sobre-next',
      prevEl: '.sobre-prev',
    },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 16 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
  });

  // ====== CARROSSEL: DIFERENCIAIS (1 visível, com setas) ======
  (function() {
    var items = document.querySelectorAll('#dif-carousel .icon-box-inline');
    if (!items.length) return;
    var current = 0;
    var total = items.length;
    var autoTimer;

    function showSlide(index) {
      items.forEach(function(item) { item.style.display = 'none'; });
      items[index].style.display = 'flex';
    }

    document.querySelector('.dif-next').addEventListener('click', function() {
      current = (current + 1) % total;
      showSlide(current);
      resetAuto();
    });

    document.querySelector('.dif-prev').addEventListener('click', function() {
      current = (current - 1 + total) % total;
      showSlide(current);
      resetAuto();
    });

    function startAuto() {
      autoTimer = setInterval(function() {
        current = (current + 1) % total;
        showSlide(current);
      }, 5000);
    }

    function resetAuto() {
      clearInterval(autoTimer);
      startAuto();
    }

    showSlide(0);
    startAuto();
  })();

  // ====== SWIPER: PROJETOS (scroll contínuo fluido) ======
  new Swiper('.projetos-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    speed: 8000,
    allowTouchMove: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 16 },
      480: { slidesPerView: 2, spaceBetween: 20 },
      1024: { slidesPerView: 3, spaceBetween: 30 },
    },
  });

  // ====== SWIPER: FORNECEDORES (scroll contínuo, 8 visíveis) ======
  new Swiper('.fornecedores-swiper', {
    slidesPerView: 8,
    spaceBetween: 20,
    loop: true,
    speed: 2500,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: { slidesPerView: 2, spaceBetween: 15 },
      480: { slidesPerView: 3, spaceBetween: 15 },
      768: { slidesPerView: 5, spaceBetween: 20 },
      1024: { slidesPerView: 8, spaceBetween: 20 },
    },
  });

  // ====== SWIPER: DEPOIMENTOS (4 visíveis) ======
  new Swiper('.depoimentos-swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.dep-next',
      prevEl: '.dep-prev',
    },
    breakpoints: {
      0: { slidesPerView: 1, spaceBetween: 16 },
      480: { slidesPerView: 2, spaceBetween: 16 },
      768: { slidesPerView: 3, spaceBetween: 20 },
      1024: { slidesPerView: 4, spaceBetween: 20 },
    },
  });

  // ====== READ MORE TOGGLE (DEPOIMENTOS) ======
  document.querySelectorAll('.depoimento-read-more').forEach(function(btn) {
    var text = btn.previousElementSibling;
    btn.addEventListener('click', function() {
      if (text.classList.contains('expanded')) {
        text.classList.remove('expanded');
        btn.textContent = 'Consulte Mais informação';
      } else {
        text.classList.add('expanded');
        btn.textContent = 'Mostrar menos';
      }
    });
  });

  // ====== COUNTER ANIMATION ======
  var statNumbers = document.querySelectorAll('.stat-number');
  var countersStarted = false;

  function animateCounters() {
    statNumbers.forEach(function (counter) {
      var target = parseInt(counter.getAttribute('data-target'));
      var duration = 2000;
      var step = target / (duration / 16);
      var current = 0;

      function updateCounter() {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current).toLocaleString('pt-BR');
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toLocaleString('pt-BR');
        }
      }
      updateCounter();
    });
  }

  var statsSection = document.getElementById('estatisticas');
  if (statsSection) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !countersStarted) {
            countersStarted = true;
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(statsSection);
  }

  // ====== SCROLL REVEAL ======
  var revealElements = document.querySelectorAll(
    '.servico-card, .stat-card, .depoimento-card, .icon-box-inline, .sobre-servico-card'
  );

  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealElements.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    revealObserver.observe(el);
  });

  // ====== FORM SUBMIT ======
  var form = document.getElementById('contato-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      form.reset();
    });
  }
});
