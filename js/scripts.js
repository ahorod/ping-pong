var numberArr = [];
var basic = function (number){
//display warning if enterd value is not numeric, else create array from 1 to user input
var numberInd;
// clears global var before executing function, after button click output is refreshesd
var numberArr = [];
if ( $.isNumeric(number) === false){
  alert("Please enter integer number");
}
else{
for (i=0; i < number; i++){
  numberInd = i+1;
  numberArr.push(numberInd);
  console.log(numberArr);
}
console.log(numberArr);
//replaces numbers divisible by 3 with "ping"
for (i=0; i<numberArr.length; i++){
  if (numberArr[i]%15 === 0){
    numberArr[i] = "ping-pong";
  }
  else if (numberArr[i]%3 === 0) {
    numberArr[i] = "ping";
  }
  else if (numberArr[i]%5 === 0) {
    numberArr[i] = "pong";
  }
  }
}
return numberArr;
}

var pingPongReverse = function (number) {
  numberArr = basic(number);
  numberArr.reverse();
  console.log(numberArr);
//display result as ul
for (i=0;i<numberArr.length; i++){
$("ul#game").append("<li>" + numberArr[i] + "</li>");
}
}

var pingPong = function (number){
  numberArr = basic(number);
  console.log(numberArr);
//display result as ul
for (i=0;i<numberArr.length; i++){
$("ul#game").append("<li>" + numberArr[i] + "</li>");
}
}

$(document).ready(function() {
  $("button#play").click(function(event) {
      event.preventDefault();
      // clear result before adding new
      $("#game").html("");
      var number = parseInt($("#input").val());
      pingPong(number);
      $("#result").show();
  });
    $("button#reverse").click(function(event) {
      event.preventDefault();
      // clear result before adding new
      $("#game").html("");
      var number = parseInt($("#input").val());
      pingPongReverse(number);
      $("#result").show();
    });

});
