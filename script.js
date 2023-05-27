window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active')
        }
    }
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (
        entry.isIntersecting
      ) {
        entry.target.classList.add('animating-skill')
      }
      else {
        entry.target.classList.remove('animating-skill');
      }
    });
  });
  
  const noAnimation = document.querySelectorAll('.no-animation');
  noAnimation.forEach((el) => observer.observe(el));