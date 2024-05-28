const getImgs= document.querySelectorAll(".header-img");
const getControlPrev = document.querySelector(".control_prev");
const getControlNext = document.querySelector(".control_next")
let n = 0;

function changeSlider() {
    for(let i = 0; i < getImgs.length; i++) {
        getImgs[i].style.display = "none"
    }
    getImgs[n].style.display = "block"
};
changeSlider();

getControlPrev.addEventListener("click", (e) => {
    if(n > 0) {
        n--;
    } else {
        n = getImgs.length - 1
    }
    changeSlider();
});

getControlNext.addEventListener("click", () => {
    if(n >= getImgs.length - 1) {
        n = 0
    } else {
        n++
    }
    changeSlider();
})


// Scroll 
const scrollContainer = document.querySelectorAll(".products");
for(let item of scrollContainer) {
    item.addEventListener("wheel", (e) => {
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    });
}