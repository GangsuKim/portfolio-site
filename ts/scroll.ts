import $ from 'jquery';

window.addEventListener('scroll', function() {
    const top = document.querySelector<HTMLDivElement>('.top');

    if(window.scrollY < 200) { // Y 좌표가 200 미만이면
        $('.top').hide(300); // '상단으로' 버튼 숨기기
    } else {
        $('.top').show(300); // '상단으로' 버튼 보이기
    }
})