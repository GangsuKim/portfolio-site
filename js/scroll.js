window.addEventListener('scroll', function() {
    if(window.scrollY < 200) {
        $('.top').hide(300);
    } else {
        $('.top').show(300);
    }
})