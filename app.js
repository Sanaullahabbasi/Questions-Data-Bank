var text = document.getElementById("textArea");
var arr = [];

function upload(){
// arr.push(text.value.split("\n"));
var value = text.value.split("\n");
var obj = {};
var count = 1;
for(var i=0; i< value.length; i++){
    if(value[i].indexOf("?") !== -1){
        obj.question = value[i]
    }else{
        if(value[i].indexOf("*") !== -1){
            obj.answer = value[i].slice(0,-1)
            obj["option" + count] = value[i].slice(0,-1)
        }
        else{
            obj["option" + count] = value[i]
        }
    }
    count++;
}
console.log(obj);
}

// var msg = "Read Intruction before proceed to read instruction"
// Swal.fire({
//     title: msg,
//     showClass: {
//       popup: 'animate__animated animate__fadeInDown'
//     },
//     hideClass: {
//       popup: 'animate__animated animate__fadeOutUp'
//     }
//   })