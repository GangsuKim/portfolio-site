window.addEventListener('scroll', function () {
    const top = document.querySelector('.top');
    if (top instanceof HTMLDivElement) {
        if (window.scrollY < 200) { // Y 좌표가 200 미만이면
            top.hidden = true; // '상단으로' 버튼 숨기기
        }
        else {
            top.hidden = false; // '상단으로' 버튼 보이기
        }
    }
});
