$("#pfp_wrapper").on("mouseenter", function(event){
    console.log("TESTING")
    $(this).css({
        transition: "transform 0.2s", // Smooth transition
        transform: "scale(1.02)",
    });
}).on("mouseleave", function(event) {
    $(this).css({
        transform: "scale(1)"
    });
});

$(".project_wrapper").on("mouseenter", function(event){
    $(this).find(".description_wrapper").css({
        transition: "transform 0.2s", // Smooth transition
        transform: "scale(1.02)",
    });

    $(this).find(".splide")
}).on("mouseleave", function(event) {
    $(this).find(".description_wrapper").css({
        transform: "scale(1)"
    });
});
$('.project_image_wrapper').hover(
    function() {
        $(this).find('.splide').hide(); // Hide the Splide
        $(this).find('.hover_image').show(); // Show the hover image
    },
    function() {
        $(this).find('.splide').show(); // Show the Splide
        $(this).find('.hover_image').hide(); // Hide the hover image
    }
);


