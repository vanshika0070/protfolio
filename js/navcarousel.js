// nav carousel





    $(document).ready(function () {
     console.log("navcarousel loaded successfully!");

        $("#carousel1").owlCarousel({
            loop: true,
            margin: 5,  // Reduced margin (default was 10)
            dots: false,
            nav:false,      
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            responsive: {
                0: { items: 3, margin: 3 },   // Even smaller gaps on smaller screens
                600: { items: 5, margin: 5 },
                1000: { items: 5, margin: 5 }
            },
            onInitialized: function () {
                console.log("carousel initialized.");
            }
        });
    });
