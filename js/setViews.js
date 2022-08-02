$(document).ready(function() {
    var isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
    if(isMobile) {
        document.querySelector('meta[name=viewport]').content = 'width=device-width, initial-scale=0.5';
    } 
});