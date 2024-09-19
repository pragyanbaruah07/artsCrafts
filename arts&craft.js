document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.pop-in');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); // This ensures the animation resets when scrolling back
        }
      });
    });
  
    elements.forEach(element => {
      observer.observe(element);
    });
  });
  