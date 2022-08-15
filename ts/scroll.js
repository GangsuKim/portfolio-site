"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
window.addEventListener('scroll', function () {
    var top = document.querySelector('.top');
    if (window.scrollY < 200) { // Y 좌표가 200 미만이면
        (0, jquery_1.default)('.top').hide(300); // '상단으로' 버튼 숨기기
    }
    else {
        (0, jquery_1.default)('.top').show(300); // '상단으로' 버튼 보이기
    }
});
