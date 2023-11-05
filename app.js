var text = document.getElementById("textArea")
console.log(text.value)

function upload(){
    text.innerHTML =  `
    ${text.value}
    `
}