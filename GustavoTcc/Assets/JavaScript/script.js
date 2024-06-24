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
