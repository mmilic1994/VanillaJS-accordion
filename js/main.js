document.addEventListener("DOMContentLoaded", () => {
    let accordionItems = document.querySelectorAll(".accordion-item");
    for(let i = 0; i < accordionItems.length; i++) {
        accordionItems[i].children[0].children[0].addEventListener("click", () => {
            if(!accordionItems[i].classList.contains("open")) {
                accordionItems[i].classList.add("open");
            } else {
                accordionItems[i].classList.remove("open");
            }
        })
    }
})