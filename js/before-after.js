// ====== BEFORE/AFTER IMAGE SLIDER ======
document.addEventListener('DOMContentLoaded', function () {
  var sliders = document.querySelectorAll('.before-after-slider');

  sliders.forEach(function (slider) {
    var handle = slider.querySelector('.ba-handle');
    var beforeImg = slider.querySelector('.ba-before');
    var isDragging = false;

    function setPosition(x) {
      var rect = slider.getBoundingClientRect();
      var pos = (x - rect.left) / rect.width;
      pos = Math.max(0.05, Math.min(0.95, pos));
      var percent = pos * 100;
      beforeImg.style.clipPath = 'inset(0 ' + (100 - percent) + '% 0 0)';
      handle.style.left = percent + '%';
    }

    // Initialize at 50%
    setPosition(0); // will be set properly on load
    setTimeout(function () {
      var rect = slider.getBoundingClientRect();
      setPosition(rect.left + rect.width * 0.5);
    }, 100);

    // Mouse events
    handle.addEventListener('mousedown', function (e) {
      e.preventDefault();
      isDragging = true;
    });

    slider.addEventListener('mousedown', function (e) {
      isDragging = true;
      setPosition(e.clientX);
    });

    document.addEventListener('mousemove', function (e) {
      if (!isDragging) return;
      e.preventDefault();
      setPosition(e.clientX);
    });

    document.addEventListener('mouseup', function () {
      isDragging = false;
    });

    // Touch events
    handle.addEventListener('touchstart', function (e) {
      isDragging = true;
    });

    slider.addEventListener('touchstart', function (e) {
      isDragging = true;
      setPosition(e.touches[0].clientX);
    });

    document.addEventListener('touchmove', function (e) {
      if (!isDragging) return;
      setPosition(e.touches[0].clientX);
    });

    document.addEventListener('touchend', function () {
      isDragging = false;
    });
  });
});
