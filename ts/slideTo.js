function slideTo(id) {
    var pos = document.querySelector('#' + id).offsetTop;
    window.scrollTo({ top: pos, behavior: 'smooth' });
}
