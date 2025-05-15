 $(document).ready(function(){
        $(".owl-carousel.reviews-carousel").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            navText: ['<i class="bi-chevron-left"></i>', '<i class="bi-chevron-right"></i>']
        });
    });

document.getElementById('registration-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registration submitted successfully!');
    document.getElementById('click').checked = false;
});