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

//add job

document.getElementById('jobForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const jobData = {
        title: document.getElementById('jobTitle').value,
        company: document.getElementById('companyName').value,
        location: document.getElementById('location').value,
        description: document.getElementById('description').value,
        salary: document.getElementById('salary').value
    };

    fetch('/api/jobs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jobData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Job added:', data);
        alert('Job added successfully!');
        document.getElementById('jobForm').reset(); // Reset the form
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error adding job. Please try again.');
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if(scroll.150){
            $(".navbar").css("background", #"222");
            $(".navbar").css("box-shadow", 
                "rgba(0,0,0,0.1)0px 4px  12px");
        }
        else{
            $(".navbar").css("background","transparent");
            $(".navbar").css("box-shahdow", "none");
        }
        
    })
    
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