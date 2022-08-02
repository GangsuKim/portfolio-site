$(document).ready(function() {
    const md = new MobileDetect(navigator.userAgent);
    if(md.tablet() == null) {
        var isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
        if(isMobile) {

        } else {
            
        }
    } else {
        console.log('Tablet');
    }
});