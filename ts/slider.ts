interface SliderHTMLElement extends HTMLDivElement {
    number :number
    sliderCnt :number
}

window.onload = () => {
    const slider1 :string[] = ['SIGN/Sign_1.png','SIGN/Sign_2.png'];
    const slider2 :string[] = ['BeanPlace/BeanPlace_1.jpg','BeanPlace/BeanPlace_2.jpg','BeanPlace/BeanPlace_3.jpg','BeanPlace/BeanPlace_4.jpg','BeanPlace/BeanPlace_5.jpg'];
    const slider3 :string[] = ['DoI/DoI_1.png','DoI/DoI_2.png','DoI/DoI_3.png'];
    const slider4 :string[] = ['MyCourse/MyCourse_1.png','MyCourse/MyCourse_2.png','MyCourse/MyCourse_3.png','MyCourse/MyCourse_4.png'];
    const slidercnt :number[] = [];

    const sliders :string[][] = [slider1,slider2,slider3,slider4];
    const path :string = './images/';

    const imageSlider :NodeListOf<SliderHTMLElement> = document.querySelectorAll(".imageSlider");

    var cnt :number = 0;

    for (let i = 0; i < imageSlider.length; i++) {
        var slider :SliderHTMLElement = imageSlider[i];

        slider.number = cnt;
        slidercnt.push(0);
        slider.querySelector<HTMLDivElement>('.btn.leftBtn')!.addEventListener('click', () => {
            slider.sliderCnt = ++slidercnt[slider.number];
            sliderLeft(slider,sliders[slider.number])
        });

        slider.querySelector<HTMLDivElement>('.btn.rightBtn')!.addEventListener('click', () => {
            slider.sliderCnt = --slidercnt[slider.number];
            sliderRight(slider,sliders[slider.number])
        });

        slider.querySelector<HTMLImageElement>('img')!.src = path + sliders[cnt][0];
        const imageCnt :number = Object.keys(sliders[cnt]).length; 

        if(imageCnt > 1) {
            for(let j = 1; j < imageCnt; j++) {
                const circle :HTMLDivElement = document.createElement('div');
                circle.setAttribute('class','listCircle');
                circle.setAttribute('id','btn_' + j);
                slider.querySelector<HTMLDivElement>('.bottomLists')!.innerHTML += circle.outerHTML;
            }
        }
        cnt++;
    }   

    function sliderLeft(slider :SliderHTMLElement, sliderList :String[]) {
        slider.querySelector<HTMLImageElement>('img')!.src = path + sliderList[Math.abs(slider.sliderCnt%sliderList.length)];
        slider.querySelector<HTMLDivElement>('.bottomLists')!.querySelector<HTMLDivElement>('#btn_' + Math.abs(slider.sliderCnt%sliderList.length))!.setAttribute('class','listCircle now');
        slider.querySelector<HTMLDivElement>('.bottomLists')!.querySelector<HTMLDivElement>('#btn_' + Math.abs((slider.sliderCnt - 1)%sliderList.length))!.setAttribute('class','listCircle');
    }

    function sliderRight (slider :SliderHTMLElement, sliderList :String[]) {
        slider.querySelector<HTMLImageElement>('img')!.src = path + sliderList[Math.abs(slider.sliderCnt%sliderList.length)];
        slider.querySelector<HTMLDivElement>('.bottomLists')!.querySelector<HTMLDivElement>('#btn_' + Math.abs(slider.sliderCnt%sliderList.length))!.setAttribute('class','listCircle now');
        slider.querySelector<HTMLDivElement>('.bottomLists')!.querySelector<HTMLDivElement>('#btn_' + Math.abs((slider.sliderCnt + 1)%sliderList.length))!.setAttribute('class','listCircle');
    }
}