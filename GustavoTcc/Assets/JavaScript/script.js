const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrousel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 1349}px)`
}

setInterval(carrousel, 1000);

document.addEventListener('DOMContentLoaded', function () {
  var sections = document.querySelectorAll('.animated-section');

  function checkVisibility() {
      var windowHeight = window.innerHeight;
      var windowTopPosition = window.scrollY;
      var windowBottomPosition = windowTopPosition + windowHeight;

      sections.forEach(function (section) {
          var sectionHeight = section.offsetHeight;
          var sectionTopPosition = section.offsetTop;
          var sectionBottomPosition = sectionTopPosition + sectionHeight;

          if (sectionBottomPosition >= windowTopPosition &&
              sectionTopPosition <= windowBottomPosition) {
              section.classList.add('visible');
          } else {
              section.classList.remove('visible');
          }
      });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility();
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

