var first = 0;
var Second = 0;
function calculate(){
    var first = Number(document.getElementById("Input_1").value);
    var Second = Number(document.getElementById("Input_2").value);
    var calculate = first + Second;
    console.log(calculate);
    document.getElementById("calculate").innerHTML = "😄Answer = " + calculate + "😄";
}