var slideIndex = 1;
              showSlides(slideIndex);
              
              // Function to display the current slide
              function currentSlide(n) {
                showSlides(slideIndex = n);
              }
              
              // Function to display next/previous slide
              function plusSlides(n) {
                showSlides(slideIndex += n);
              }
              
              // Function to display slides
              function showSlides(n) {
                var i;
                var slides = document.getElementsByClassName("mySlides");
                var dots = document.getElementsByClassName("dot");
                if (n > slides.length) {
                  slideIndex = 1;
                }
                if (n < 1) {
                  slideIndex = slides.length;
                }
                for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";
                }
                for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" active", "");
                }
                slides[slideIndex - 1].style.display = "block";
                dots[slideIndex - 1].className += " active";
              }