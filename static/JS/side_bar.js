$("#_start").on("click", function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 700); // Animation duration in milliseconds
});

$("#_about").on("click", function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $(window).height() * 1
    }, 700); // Animation duration in milliseconds
});

$("#_project").on("click", function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $(window).height() * 2
    }, 700); // Animation duration in milliseconds
});

const contactY = $('#_contact').offset().top;
const maxY = document.documentElement.scrollHeight - window.innerHeight;
console.log("Maximum Y value:", maxY);

$("#_contact").on("click", function(event){
    event.preventDefault();
    // $('html, body').animate({
    //     scrollTop: $(window).height() * 3
    // }, 700); // Animation duration in milliseconds
    $('html, body').animate({
        scrollTop: 5000
    }, 700); // Animation duration in milliseconds
});


$(".menu_option").hover(function(){
    $(this).css("font-weight", "550");
}, function(){
    $(this).css("font-weight", "normal");
});
