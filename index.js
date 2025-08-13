(() => {
  // Mobile dropdown toggle
  document.querySelectorAll('.dropdown > a').forEach(item => {
    item.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        this.parentElement.classList.toggle('active');
      }
    });
  });

  // Slider logic
  const slider = document.querySelector('.slider');
  if (slider) {
    function activate(e) {
      const items = document.querySelectorAll('.item');
      if (e.target.matches('.nextt')) {
        slider.append(items[0]);
      }
      if (e.target.matches('.prevv')) {
        slider.prepend(items[items.length - 1]);
      }
    }

    document.addEventListener('click', activate, false);

    // Auto slide every 2 seconds
    setInterval(() => {
      const items = document.querySelectorAll('.item');
      if (items.length > 0) {
        slider.append(items[0]);
      }
    }, 3000);
  }

  // Lightbox or gallery preview logic
  let slideIndex = 1;
  showSlides(slideIndex);

  window.plusSlides = function (n) {
    showSlides(slideIndex += n);
  };

  window.currentSlide = function (n) {
    showSlides(slideIndex = n);
  };

  function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");

    if (slides.length === 0) return;

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
  }
})();
