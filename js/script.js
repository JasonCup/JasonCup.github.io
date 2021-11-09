

//This for smooth scrolling//
$(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) +']');
        if (target.length) {
        $('html,body').animate({
            scrollTop: target.offset().top
            }, 10);
        return false;
        }
    });
});

//Button to move to top//
var btn = $('#button');

$(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
$('html, body').animate({scrollTop:0}, '200');
});
