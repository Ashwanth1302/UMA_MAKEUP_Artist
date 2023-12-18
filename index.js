
(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery

$(document).ready(function() {
  // Toggle navigation
  $('#nav-toggle').click(function() {
    $('.nav-list').toggleClass('active');
  });

  // Close navigation on click outside
  $(document).mouseup(function(e) {
    var container = $('.nav-container');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.nav-list').removeClass('active');
    }
  });

  // Toggle dropdowns
  $('.nav-list li').click(function() {
    $(this).find('.nav-dropdown').toggle();
    $('.nav-list li').not(this).find('.nav-dropdown').hide();
  });
});


 

//window.addEventListener("scroll", function() {
 // var navbar = document.querySelector(".navbar-scroll");
 // if (window.scrollY > 0) {
   //   navbar.classList.add("scroll");
 // } else {
  //    navbar.classList.remove("scroll");
 // }
//});

// Optional: Add a shadow to the navbar on scroll
//window.addEventListener("scroll", function() {
  //var navbar = document.querySelector(".navbar-scroll");
 // if (window.scrollY > 0) {
     // navbar.classList.add("shadow");
 // } else {
    //  navbar.classList.remove("shadow");
 // }
//});//
 





$(document).ready(function(){
    $("img").click(function(){
    var t = $(this).attr("src");
    $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
    $("#myModal").modal();
  });
  
  $("video").click(function(){
    var v = $("video > source");
    var t = v.attr("src");
    $(".modal-body").html("<video class='model-vid' controls><source src='"+t+"' type='video/mp4'></source></video>");
    $("#myModal").modal();  
  });
  });//EOF Document.ready

  
  

 
const serviceCards = document.querySelectorAll('.service-card');

const options = {
  threshold: 0.2, // Adjust this value as needed
};

const serviceCardObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate'); // You can add an 'animate' class for the animation effect
      observer.unobserve(entry.target);
    }
  });
}, options);

serviceCards.forEach((card) => {
  serviceCardObserver.observe(card);
});



//about

function scrollToAbout() {
  var aboutSection = document.getElementById("aboutSection");
  aboutSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact(){
  var contactSection = document.getElementById("contact");
  contactSection.scrollIntoView({ behavior: 'smooth' });
}



//reload
function reloadWithLoading() {
  var loadingOverlay = document.getElementById("loading-overlay");
  loadingOverlay.classList.add("active"); // Show the loading overlay

  // Reload the page after a short delay (you can adjust the delay as needed)
  setTimeout(function() {
    location.reload();
  }, 1000); // 1000 milliseconds (1 second) in this example
}