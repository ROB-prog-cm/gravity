$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots: false,
        navText: ['<img src="img/left.svg">', '<img src="img/right.svg">'],
        autoWidth: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });
});
