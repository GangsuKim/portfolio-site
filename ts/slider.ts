function slideTo(id :string) {
    var pos :number = document.querySelector<HTMLElement>('#' + id)!.offsetTop;
    window.scrollTo({top:pos, behavior:'smooth'});
}