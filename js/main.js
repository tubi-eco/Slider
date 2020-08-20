// Add active class to the selected toggle button
var toggleContainer = document.getElementById("toggle-buttons-id");
var btns = toggleContainer.getElementsByClassName("toggle-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

//Slider
function slider(){
    var slide = 0,
    slides = document.querySelectorAll('.slider-container.slideshow.active .slides > li'),
    numSlides = slides.length,
    thumbSlide = 0,
    ThumbSlides = document.querySelectorAll('.slider-container.slideshow.active .slideThumbnail > ul > li'),
    ThumbNumSlides = ThumbSlides.length,

    currentSlide = function() {
      var itemToShow = Math.abs(slide % numSlides);
      [].forEach.call(slides, function(el) {
        el.classList.remove('slideActive')
      });
      slides[itemToShow].classList.add('slideActive');

      var itemToShowThumb = Math.abs(thumbSlide % ThumbNumSlides);
      [].forEach.call(ThumbSlides, function(el) {
        el.classList.remove('active')
      });
      ThumbSlides[itemToShowThumb].classList.add('active');
      resetInterval();
    },
    next = function() {
      slide++;
      thumbSlide++;
      currentSlide();
    },
    prev = function() {
      slide--;
      thumbSlide--;
      currentSlide();
    },
    resetInterval = function() {
      clearInterval(autonext);
      autonext = setInterval(function() {
        slide++;
        thumbSlide++;
        currentSlide();
      }, 3000);
    },
    autonext = setInterval(function() {
      next();
    }, 3000);


  //Control Buttons
  document.querySelector('.slider-container.slideshow.active .slideThumbnail .first').addEventListener('click', function() {
    slide = 0;
    thumbSlide = 0;
    currentSlide();
  }, false);
  document.querySelector('.slider-container.slideshow.active .slideThumbnail .second').addEventListener('click', function() {
    slide = 1;
    thumbSlide = 1;
    currentSlide();
  }, false);
  document.querySelector('.slider-container.slideshow.active .slideThumbnail .third').addEventListener('click', function() {
    slide = 2;
    thumbSlide = 2;
    currentSlide();
  }, false);

  document.querySelector('.slider-container.slideshow.active .control .next').addEventListener('click', function() {
    next();
  }, false);
  document.querySelector('.slider-container.slideshow.active .control .previous').addEventListener('click', function() {
    prev();
  }, false);

  return false;
};

//show-hide slider tab content
var divs = ["testimonial-content", "feedbacks-content"];
var visibleDivId = null;
function divVisibility(divId) {
  if(visibleDivId === divId) {
    visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
      div.classList.add("active");
    } else {
      div.style.display = "none";
      div.classList.remove("active");
    }
  }
}

slider();