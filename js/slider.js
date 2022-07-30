window.onload = () => {
    const slider1 = ['SIGN/Sign_1.png','SIGN/Sign_2.png'];
    const slider2 = ['BeanPlace/BeanPlace_1.png','BeanPlace/BeanPlace_2.png','BeanPlace/BeanPlace_3.png','BeanPlace/BeanPlace_4.png','BeanPlace/BeanPlace_5.png'];
    const slidercnt = [];
    
    const sliders = [slider1,slider2];
    const path = './images/';

    const imageSlider = document.getElementsByClassName("imageSlider");

    var cnt = 0;
    for (let slider of imageSlider) {
        console.log(slider)
        slider.number = cnt;
        slidercnt.push(0); // set image status
        slider.querySelector('.btn.leftBtn').addEventListener('click', (e) => {
            slider.sliderCnt = ++slidercnt[slider.number];
            sliderLeft(slider,sliders[slider.number])
        });

        slider.querySelector('.btn.rightBtn').addEventListener('click', (e) => {
            slider.sliderCnt = --slidercnt[slider.number];
            sliderRight(slider,sliders[slider.number])
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
        cnt++;
    }

    function sliderLeft(slider,sliderList) {
        slider.querySelector('img').src = path + sliderList[Math.abs(slider.sliderCnt%sliderList.length)];
        slider.querySelector('.bottomLists').querySelector('#btn_' + Math.abs(slider.sliderCnt%sliderList.length)).setAttribute('class','listCircle now');
        slider.querySelector('.bottomLists').querySelector('#btn_' + Math.abs((slider.sliderCnt - 1)%sliderList.length)).setAttribute('class','listCircle');
    }

    function sliderRight (slider,sliderList) {
        slider.querySelector('img').src = path + sliderList[Math.abs(slider.sliderCnt%sliderList.length)];
        slider.querySelector('.bottomLists').querySelector('#btn_' + Math.abs(slider.sliderCnt%sliderList.length)).setAttribute('class','listCircle now');
        slider.querySelector('.bottomLists').querySelector('#btn_' + Math.abs((slider.sliderCnt + 1)%sliderList.length)).setAttribute('class','listCircle');

    }
}

