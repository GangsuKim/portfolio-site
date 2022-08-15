const slider1 = ['SIGN/Sign_1.png', 'SIGN/Sign_2.png'];
const slider2 = ['BeanPlace/BeanPlace_1.jpg', 'BeanPlace/BeanPlace_2.jpg', 'BeanPlace/BeanPlace_3.jpg', 'BeanPlace/BeanPlace_4.jpg', 'BeanPlace/BeanPlace_5.jpg'];
const slider3 = ['DoI/DoI_1.png', 'DoI/DoI_2.png', 'DoI/DoI_3.png'];
const slider4 = ['MyCourse/MyCourse_1.png', 'MyCourse/MyCourse_2.png', 'MyCourse/MyCourse_3.png', 'MyCourse/MyCourse_4.png'];
const slidercnt = [];
const sliders = [slider1, slider2, slider3, slider4];
const path = './images/';
const imageSlider = document.querySelectorAll(".imageSlider");
var cnt = 0;
for (let slider of imageSlider) {
    slider.number = cnt;
    slidercnt.push(0);
    slider.querySelector('.btn.leftBtn').addEventListener('click', () => {
        slider.sliderCnt = ++slidercnt[slider.number];
        sliderLeft(slider, sliders[slider.number]);
    });
    slider.querySelector('.btn.rightBtn').addEventListener('click', () => {
        slider.sliderCnt = --slidercnt[slider.number];
        sliderRight(slider, sliders[slider.number]);
    });
    slider.querySelector('img').src = path + sliders[cnt][0];
    const imageCnt = Object.keys(sliders[cnt]).length;
    if (imageCnt > 1) {
        for (let j = 1; j < imageCnt; j++) {
            const circle = document.createElement('div');
            circle.setAttribute('class', 'listCircle');
            circle.setAttribute('id', 'btn_' + j);
            slider.querySelector('.bottomLists').innerHTML += circle.outerHTML;
        }
    }
    cnt++;
}
function sliderLeft(slider, sliderList) {
    slider.querySelector('img').src = path + sliderList[Math.abs(slider.sliderCnt % sliderList.length)];
    slider.querySelector('.bottomLists').querySelector('#btn_' + Math.abs(slider.sliderCnt % sliderList.length)).setAttribute('class', 'listCircle now');
    slider.querySelector('.bottomLists').querySelector('#btn_' + Math.abs((slider.sliderCnt - 1) % sliderList.length)).setAttribute('class', 'listCircle');
}
function sliderRight(slider, sliderList) {
    slider.querySelector('img').src = path + sliderList[Math.abs(slider.sliderCnt % sliderList.length)];
    slider.querySelector('.bottomLists').querySelector('#btn_' + Math.abs(slider.sliderCnt % sliderList.length)).setAttribute('class', 'listCircle now');
    slider.querySelector('.bottomLists').querySelector('#btn_' + Math.abs((slider.sliderCnt + 1) % sliderList.length)).setAttribute('class', 'listCircle');
}
