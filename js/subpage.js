// ====== SUB-PAGE SHARED JS ======
document.addEventListener('DOMContentLoaded', function () {

  // ====== MOBILE MENU ======
  var menuToggle = document.getElementById('menu-toggle');
  var navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.getElementById('header').classList.toggle('header--menu-open');
    });

    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.getElementById('header').classList.remove('header--menu-open');
      });
    });
  }

  // ====== HEADER SCROLL (transparent → white) ======
  var header = document.getElementById('header');
  var scrollTop = document.getElementById('scroll-top');

  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;

    // Header: transparent over hero, white after scrolling
    if (header) {
      if (scrollY > 80) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    }

    // Scroll to top button
    if (scrollTop) {
      if (scrollY > 400) {
        scrollTop.classList.add('visible');
      } else {
        scrollTop.classList.remove('visible');
      }
    }
  });

  // ====== FORM SUBMIT (generic) ======
  var forms = document.querySelectorAll('form');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      form.reset();
    });
  });

  // ====== FILE UPLOAD LABEL ======
  var fileInput = document.getElementById('file-input');
  if (fileInput) {
    fileInput.addEventListener('change', function () {
      var uploadArea = fileInput.closest('.file-upload-area');
      if (uploadArea && fileInput.files.length > 0) {
        uploadArea.querySelector('p').textContent = fileInput.files[0].name;
      }
    });
  }
});
