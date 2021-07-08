const panel =   document.getElementById("panel");
const burger = document.getElementById("menu");

function myFunction() {
  panel.classList.toggle("show");
  }

burger.addEventListener("click", () => {
  panel.classList.toggle("show");
});

// Forms
 window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      // button.style = "display: none ";
      status.classList.add("success");
      status.innerHTML = "Success! 💨 Form submitted Successfully";
    }

    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

// down arrow

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos === 0) {
    document.getElementById("downArrow").style.display = "block";
  } else {
    document.getElementById("downArrow").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
}

// var header = document.getElementById("header");
// var downArrow = document.getElementById('downArrow');

// function fadeOutOnScroll(element, fadedElement) {
// 	if (!element) {
// 		return;
// 	}
	
// 	var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
// 	var elementHeight = element.offsetHeight;
// 	var scrollTop = document.documentElement.scrollTop;
	
// 	var opacity = 1;
	
// 	if (scrollTop > distanceToTop) {
// 		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
// 	}
	
// 	if (opacity >= 0) {
// 		fadedElement.style.opacity = opacity;
// 	}
// }

// function scrollHandler() {
// 	fadeOutOnScroll(header, downArrow);
// }

// window.addEventListener('scroll', scrollHandler);