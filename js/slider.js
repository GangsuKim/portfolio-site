window.onload = () => {
    const slider1 = ['SIGN/Sign_1.png','SIGN/Sign_2.png'];
    const slidercnt = [];
    
    const sliders = [slider1];
    const path = './images/';

    const imageSlider = document.getElementsByClassName("imageSlider");

    const cnt = 0;
    for (let slider of imageSlider) {
        slidercnt.push(0); // set image status
        slider.querySelector('.btn.leftBtn').addEventListener('click', (e) => {
            slider.sliderCnt = --slidercnt[cnt];
            sliderLeft(slider,sliders[cnt])
        });

        slider.querySelector('.btn.rightBtn').addEventListener('click', (e) => {
            slider.sliderCnt = ++slidercnt[cnt];
            sliderRight(slider,sliders[cnt])
        });


        slider.querySelector('img').src = path + sliders[cnt][0];
        const imageCnt = Object.keys(sliders[cnt]).length; 
        
        if(imageCnt > 1) {
            for(var i = 1; i < imageCnt; i++) {
                const circle = document.createElement('div');
                circle.setAttribute('class','listCircle');
                circle.setAttribute('id','btn_' + i);
                slider.querySelector('.bottomLists').innerHTML += circle.outerHTML;
            }
        }
    }

    function sliderLeft(slider,sliderList) {
        slider.querySelector('img').src = path + sliderList[Math.abs(slider.sliderCnt%sliderList.length)];
        slider.querySelector('.bottomLists').querySelector('#btn_' + Math.abs(slider.sliderCnt%sliderList.length)).setAttribute('class','listCircle now');
        slider.querySelector('.bottomLists').querySelector('#btn_' + Math.abs((slider.sliderCnt + 1)%sliderList.length)).setAttribute('class','listCircle');
    }

    function sliderRight (slider,sliderList) {
        slider.querySelector('img').src = path + sliderList[Math.abs(slider.sliderCnt%sliderList.length)];
        slider.querySelector('.bottomLists').querySelector('#btn_' + Math.abs(slider.sliderCnt%sliderList.length)).setAttribute('class','listCircle now');
        slider.querySelector('.bottomLists').querySelector('#btn_' + Math.abs((slider.sliderCnt - 1)%sliderList.length)).setAttribute('class','listCircle');

    }
}

