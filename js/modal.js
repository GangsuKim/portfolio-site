window.onload = () => {
    const skills = document.getElementsByClassName('skills')[0];
    const imgs = skills.getElementsByTagName('img');
    const modalTitle = skills.getElementsByClassName('modalTitle')[0];
    modalTitle.hidden = true;

    for (var i in imgs) {
        const img = imgs[i];
        img.addEventListener('mouseover', (e) => {
            modalTitle.hidden = false;
            modalTitle.innerHTML = e.target.alt;

            modalTitle.style.top = (getRelativeTop(img) + 100) + 'px';
            modalTitle.style.left = (getRelativeLeft (img) + getMarginLeft(e.target, modalTitle)) + 'px';
        });

        img.addEventListener('mouseleave', (e) => {
            modalTitle.hidden = true;
        })
    }

    function getRelativeTop(img) {
        const parentElement = img.parentElement.parentElement.parentElement;
        const parentAbsoluteTop = getAbsoluteTop(parentElement);
        const absoulteTop = getAbsoluteTop(img);
        return absoulteTop - parentAbsoluteTop;
    }

    function getRelativeLeft (img) {
        const parentElement = img.parentElement.parentElement.parentElement;
        return img.getBoundingClientRect().left - parentElement.getBoundingClientRect().left;
    }

    function getAbsoluteTop(element) {
        return window.pageYOffset + element.getBoundingClientRect().top;
    }

    function getMarginLeft(imgEle, modalEle) {
        const imgSize = imgEle.getBoundingClientRect().right - imgEle.getBoundingClientRect().left;
        const modalSize = modalEle.getBoundingClientRect().right - modalEle.getBoundingClientRect().left;
        return (imgSize/2) - (modalSize/2);
    }
}