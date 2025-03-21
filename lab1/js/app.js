console.log("Hello, World");

const printHello = document.getElementsByTagName('div')[0];
const button = document.getElementById("button"); 

console.log(button)

printHello.innerHTML = "Hello World";

function changeText() {
    printHello.innerHTML = "Milash";
}

button.addEventListener("mouseout", changeText);