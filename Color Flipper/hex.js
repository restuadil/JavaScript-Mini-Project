const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const button = document.querySelector("#btn");
const color = document.querySelector(".color");

/**
 * contoh hexa warna
 * f40023
 */
button.addEventListener("click", ()=> {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        
        hexColor = hexColor + hex[getRandom()]
        // atau bisa pake
        // hexColor =+ hex[getRandom()]
        // console.log(hexColor
    }
color.textContent = hexColor
document.body.style.backgroundColor = hexColor
})

const getRandom = () => {
    return Math.floor(Math.random() * hex.length)
}