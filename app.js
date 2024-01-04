let decrease = document.querySelector(".decrease");
let increase = document.querySelector(".increase");
let reset = document.querySelector(".reset");
let h3 = document.querySelector("h3");

let counter = 0;

increase.addEventListener("click", () => {
    counter ++;
    h3.innerHTML = ` ${counter}`;
    if(counter > 0) {
        h3.style.color = "green";
    }  else if(counter === 0) {
        h3.style.color = "#fff";
    }else {
        h3.style.color = "red";
    }
})

decrease.addEventListener("click", () => {
    counter --;
    h3.innerHTML = ` ${counter}`;
    if(counter < 0) {
        h3.style.color = "red";
    } else if(counter === 0) {
        h3.style.color = "#fff";
    } else {
        h3.style.color = "green";
    }
})

reset.addEventListener("click", () => {
    counter = 0;
    h3.innerHTML = ` ${counter}`;
    if(counter === 0) {
        h3.style.color = "#fff";
    }  else if(counter === 0) {
        h3.style.color = "#fff";
    }else {
        h3.style.color = "#fff";
    }
})