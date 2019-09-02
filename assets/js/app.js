document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

  // Carousel
    $('.flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 320,
    itemMargin: 5,
    asNavFor: '#slider'
    });

    $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    itemWidht: ($(window).width()/3), // calculate slide widht based on window, divide by 3 to show 3
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"  
    });
});

function newFunction() {
  return true;
}

