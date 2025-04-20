// change navbar color 
document.getElementById('signInForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/api/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    const messageDiv = document.getElementById('message');

    if (response.ok) {
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Sign in successful!';
        // Redirect to another page or perform other actions
    } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = data.message || 'Sign in failed!';
    }
});


//smooth scroll

var navbarHeight = $(".navbar").outerHeight();
$(".navbar-menu a").click(function(e){
    var targetHref = $(this).attr("href");
    $("html, body").animate({
    scrollTop: $(targetHref).offset().top- navbarHeight
    }, 1000)
    e.preventDefault();
});


// swiper
var swiper = new Swiper(".mySwiper",
{
    loop: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    slidesPerView:1,
    spaceBetween:10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }, 
    breakpoints:{
        640:{
            slidesPerView: 2,
            spaceBetween: 20,
        }, 
        768:{
            slidesPerView: 3,
            spaceBetween: 40,
        
        },
        
        1024: {
            slidesPerView:3,
            spaceBetween: 50,
        }
    }
});