const skills = document.querySelector<HTMLDivElement>('.skills')!;
const imgs = skills.querySelectorAll<HTMLImageElement>('img');
const modalTitle = skills.querySelector<HTMLDivElement>('.modalTitle');


for (var i = 0; i < imgs.length; i++) {
    const img: HTMLImageElement = imgs[i];
    img.addEventListener('mouseover', (e) => {
        if (e.target instanceof HTMLImageElement && modalTitle instanceof HTMLDivElement) {
            modalTitle.hidden = false;
            modalTitle.innerHTML = e.target.alt;

            modalTitle.style.top = (getRelativeTop(img) + 100) + 'px';
            modalTitle.style.left = (getRelativeLeft(img) + getMarginLeft(e.target, modalTitle)) + 'px';
        }
    });

    img.addEventListener('mouseleave', () => {
        if(modalTitle instanceof HTMLDivElement) {
            modalTitle.hidden = true;
        }
    })
}

function getRelativeTop(img: HTMLImageElement): number {
    const parentElement = img.parentElement?.parentElement?.parentElement;
    var parentAbsoluteTop :number = 0;
    if(parentElement instanceof HTMLElement) {
        parentAbsoluteTop = getAbsoluteTop(parentElement);
    }
    const absoulteTop = getAbsoluteTop(img);
    return absoulteTop - parentAbsoluteTop;
}

function getRelativeLeft(img: HTMLImageElement): number {
    const parentElement = img.parentElement?.parentElement?.parentElement;
    var res :number = 0;
    if(parentElement instanceof HTMLDivElement) {
        res = img.getBoundingClientRect().left - parentElement.getBoundingClientRect().left;
    }
    return res;
}

function getAbsoluteTop(element :HTMLElement) {
    return window.pageYOffset + element.getBoundingClientRect().top;
}

function getMarginLeft(imgEle :HTMLImageElement, modalEle:HTMLDivElement) {
    const imgSize = imgEle.getBoundingClientRect().right - imgEle.getBoundingClientRect().left;
    const modalSize = modalEle.getBoundingClientRect().right - modalEle.getBoundingClientRect().left;
    return (imgSize / 2) - (modalSize / 2);
}
