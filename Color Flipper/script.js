const button = document.querySelector("#btn")

button.addEventListener("click", () => {
    const data = document.querySelector("#inp").value
    document.body.style.backgroundColor = data
})

