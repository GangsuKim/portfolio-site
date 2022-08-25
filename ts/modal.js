const skills = document.querySelector('.skills');
const imgs = skills.querySelectorAll('img');
const modalTitle = skills.querySelector('.modalTitle');
for (var i = 0; i < imgs.length; i++) {
    const img = imgs[i];
    img.addEventListener('mouseover', (e) => {
        if (e.target instanceof HTMLImageElement && modalTitle instanceof HTMLDivElement) {
            modalTitle.hidden = false;
            modalTitle.innerHTML = e.target.alt;
            modalTitle.style.top = (getRelativeTop(img) + 100) + 'px';
            modalTitle.style.left = (getRelativeLeft(img) + getMarginLeft(e.target, modalTitle)) + 'px';
        }
    });
    img.addEventListener('mouseleave', () => {
        if (modalTitle instanceof HTMLDivElement) {
            modalTitle.hidden = true;
        }
    });
}
function getRelativeTop(img) {
    var _a, _b;
    const parentElement = (_b = (_a = img.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
    var parentAbsoluteTop = 0;
    if (parentElement instanceof HTMLElement) {
        parentAbsoluteTop = getAbsoluteTop(parentElement);
    }
    const absoulteTop = getAbsoluteTop(img);
    return absoulteTop - parentAbsoluteTop;
}
function getRelativeLeft(img) {
    var _a, _b;
    const parentElement = (_b = (_a = img.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement;
    var res = 0;
    if (parentElement instanceof HTMLDivElement) {
        res = img.getBoundingClientRect().left - parentElement.getBoundingClientRect().left;
    }
    return res;
}
function getAbsoluteTop(element) {
    return window.pageYOffset + element.getBoundingClientRect().top;
}
function getMarginLeft(imgEle, modalEle) {
    const imgSize = imgEle.getBoundingClientRect().right - imgEle.getBoundingClientRect().left;
    const modalSize = modalEle.getBoundingClientRect().right - modalEle.getBoundingClientRect().left;
    return (imgSize / 2) - (modalSize / 2);
}
