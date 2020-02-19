function add(){

    var box1 = document.getElementById("n1").value;
    var box2 = document.getElementById("n2").value;

    var result = parseFloat(box1) + parseFloat(box2);

    showResult(result);
}

function subtract(){

    var box1 = document.getElementById("n1").value;
    var box2 = document.getElementById("n2").value;

    var result = parseFloat(box1) - parseFloat(box2);

    showResult(result);
}

function multiply(){

    var box1 = document.getElementById("n1").value;
    var box2 = document.getElementById("n2").value;

    var result = parseFloat(box1) * parseFloat(box2);

    showResult(result);
}

function divide(){

    var box1 = document.getElementById("n1").value;
    var box2 = document.getElementById("n2").value;

    var result = parseFloat(box1) / parseFloat(box2);

    showResult(result);
}

function showResult(result){

  if (isNaN(result)){
    document.getElementById("result").innerHTML = "?";

  } else {
    document.getElementById("result").innerHTML = result;
  }
}
