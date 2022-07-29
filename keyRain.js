const body = document.getElementsByTagName('body')[0];

body.addEventListener("keydown", function(e) {
    // console.log(e.key);
    const div = document.createElement('div');
    div.setAttribute("class","keyRainDiv")
    div.innerText = e.key;
    body.appendChild(div);
})


// setInterval(() => {
//     const keyRains = document.getElementsByClassName('keyRainDiv');

//     for(var i = 0; i < keyRains.length; i++) {
//         console.log(keyRains[i].getBoundingClientRect().top);
//     }
// }, 1000)