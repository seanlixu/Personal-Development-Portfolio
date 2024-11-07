$("#linkedin_link").on("mouseenter", function(event) {
    console.log("test");
    $(this).css({
        transition: "transform 0.2s", // Smooth transition
        transform: "scale(1.1)"
    });
}).on("mouseleave", function(event) {
    $(this).css({
        transform: "scale(1)"
    });
}).on("click", function(event){
    window.location.href = "https://www.linkedin.com/in/sean-l-b5a49b237/";
});

$("#github_link").on("mouseenter", function(event) {
    console.log("test");
    $(this).css({
        transition: "transform 0.2s", // Smooth transition
        transform: "scale(1.1)"
    });
}).on("mouseleave", function(event) {
    $(this).css({
        transform: "scale(1)"
    });
}).on("click", function(event){
    window.location.href = "https://github.com/seanlixu";
});

$("#gmail_link").on("mouseenter", function(event) {
    console.log("test");
    $(this).css({
        transition: "transform 0.2s", // Smooth transition
        transform: "scale(1.1)"
    });
}).on("mouseleave", function(event) {
    $(this).css({
        transform: "scale(1)"
    });
}).on("click", function(event){
    navigator.clipboard.writeText("seanlixustudent@gmail.com");
    $("#gmailhtml").html('<div style="margin-left:72px;">Copied!</div>');
    setTimeout(function() {
        $("#gmailhtml").html('seanlixustudent@gmail.com');
    }, 1500);
});

