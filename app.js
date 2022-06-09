let progress_bar = document.querySelector(".progress_bar");
let progress_value = document.getElementById("progress_value");


let progress_start = 0;
let progress_end = 80;
let speed = 100;


let progress = setInterval(() => {
    progress_start++;
    if(progress_start == progress_end){
        clearInterval(progress);
    }
    progress_bar.style.background = `conic-gradient(rgb(9, 81, 216) ${progress_start * 3.6}deg, rgb(141 162 231) 0deg)`;


    progress_value.innerHTML = `${progress_start}%`;
}, speed);