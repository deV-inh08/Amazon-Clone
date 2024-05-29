// Scroll 
const scrollContainer = document.querySelectorAll(".products");
for(let item of scrollContainer) {
    item.addEventListener("wheel", (e) => {
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    });
};
console.log(scrollContainer)