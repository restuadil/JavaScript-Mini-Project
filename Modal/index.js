const modalBtn = document.querySelector("#modal-btn");
const modal = document.querySelector("#modal-overlay");
const closeBtn = document.querySelector("#close-btn");


modalBtn.addEventListener("click", ()=> {
    modal.classList.replace("hidden","visible")
});

closeBtn.addEventListener("click", () => {
    modal.classList.replace("visible", "hidden")
});