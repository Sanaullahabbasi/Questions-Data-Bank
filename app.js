var text = document.getElementById("textArea");

function upload() {
  var questions = [];
  var value = text.value.split("\n");
  var obj = {};
  var count = 1;
  for (var i = 0; i < value.length; i++) {
    if (value[i] === "") {
      questions.push(obj);
      obj = {};
      count = 1;
    } else {
      if (value[i].indexOf("?") !== -1) {
        obj.question = value[i];
      } else {
        if (value[i].indexOf("*") !== -1) {
          obj.answer = value[i].slice(0, -1);
          obj["option" + count] = value[i].slice(0, -1);
        } else {
          obj["option" + count] = value[i];
        }
        count++;
      }
    }
  }
  console.log(questions);
}

var msg =
  "Rules: place question mark at the end or every question, enter a space after complete typing the questions and also place enter after the last question in your data bank";
Swal.fire({
  title: msg,
  showClass: {
    popup: "animate__animated animate__fadeInDown",
  },
  hideClass: {
    popup: "animate__animated animate__fadeOutUp",
  },
});
