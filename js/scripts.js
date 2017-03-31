var pingPong = function (number){
//create array from 1 to user input
var numberInd;
var numberArr = [];
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
  console.log(numberArr);


}

$(document).ready(function() {
    $("form#ping-pong").submit(function(event) {
        event.preventDefault();
        var number = parseInt($("#input").val());
        var result = pingPong(number);
        $("#game").text(result);

    });
});
