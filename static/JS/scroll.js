$(document).on('scroll', function(event) {
    const y = window.scrollY;
    const start = $('#_start');
    const about = $('#_about');
    const project = $('#_project');
    const contact = $('#_contact');

    console.log('Y: ', y);

    if (y >= 0 && y <= $(window).height() * 0.5) {
        if (!start.hasClass('scale-up')) {
            start.addClass('scale-up').removeClass('scale-down');
        }
    } else {
        start.removeClass('scale-up').addClass('scale-down');
    }

    if (y > $(window).height() * 0.5 && y <= $(window).height() * 1.5) {
        if (!about.hasClass('scale-up')) {
            about.addClass('scale-up').removeClass('scale-down');
        }
    } else {
        about.removeClass('scale-up').addClass('scale-down');
    }

    if (y > $(window).height() * 1.5 && y <= $(window).height() * 3) {
        if (!project.hasClass('scale-up')) {
            project.addClass('scale-up').removeClass('scale-down');
        }
    } else {
        project.removeClass('scale-up').addClass('scale-down');
    }

    if (y > $(window).height() * 3 && y <= $(window).height() * 4.5) {
        if (!contact.hasClass('scale-up')) {
            contact.addClass('scale-up').removeClass('scale-down');
        }
    } else {
        contact.removeClass('scale-up').addClass('scale-down');
    }
});
