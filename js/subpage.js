// ====== SUB-PAGE SHARED JS ======
document.addEventListener('DOMContentLoaded', function () {

  // ====== MOBILE MENU ======
  var menuToggle = document.getElementById('menu-toggle');
  var navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
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
  }

  // ====== SCROLL TO TOP ======
  var scrollTop = document.getElementById('scroll-top');
  if (scrollTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        scrollTop.classList.add('visible');
      } else {
        scrollTop.classList.remove('visible');
      }
    });
  }

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
