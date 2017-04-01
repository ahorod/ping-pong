var basic = function(number) {
    //display warning if enterd value is not numeric, else create array from 1 to user input
    var numberInd;
    var numberArr = [];
    if ($.isNumeric(number) === false) {
        alert("Please enter integer number");
    } else {
        for (i = 0; i < number; i++) {
            numberInd = i + 1;
            numberArr.push(numberInd);
            console.log(numberArr);
        }
        console.log(numberArr);
        //replaces numbers divisible by 15 with "ping-pong"
        for (i = 0; i < numberArr.length; i++) {
            if (numberArr[i] % 15 === 0) {
                numberArr[i] = "ping-pong";
            }
            //replaces numbers divisible by 3 with "ping"
            else if (numberArr[i] % 3 === 0) {
                numberArr[i] = "ping";
            }
            //replaces numbers divisible by 5 with "pong"
            else if (numberArr[i] % 5 === 0) {
                numberArr[i] = "pong";
            }
        }
    }
    return numberArr;
}
var score = function(numberArr) {
  var countPing = 0;
  var countPong = 0;

    for (i = 0; i < numberArr.length; i++) {
        if (numberArr[i] === "ping") {
            countPing = countPing + 1;
        } else if (numberArr[i] === "pong") {
            countPong = countPong + 1;
        } else if (numberArr[i] === "ping-pong") {
            countPing = countPing - 2;
            countPong = countPong + 1;
        }
    }
    console.log(countPing);
    console.log(countPong);
    if (countPing > countPong) {
      alert("Ping win");
    } else if (countPing === countPong) {
        alert("Its a tie");
    } else if (countPong > countPing) {
        alert("Pong win");
    }
    return [countPing, countPong];
}

var pingPongReverse = function(number) {
    var numberArr = basic(number);
    numberArr.reverse();
    var countArr = score(numberArr);
    return [numberArr, countArr];
}

var pingPong = function(number) {
    var numberArr = basic(number);
    var countArr = score(numberArr);
    return [numberArr, countArr];
}

$(document).ready(function() {
    var showResult = function(result){
      var numberArr = result[0];
      for (i = 0; i < numberArr.length; i++) {
          $("ul#game").append("<li>" + numberArr[i] + "</li>");
      }
      var countPing = result[1][0];
      var countPong = result[1][1];
      $("#ping-score").text(countPing);
      $("#pong-score").text(countPong);
    }

    $("button#play").click(function(event) {
        event.preventDefault();
        // clear result before adding new
        $("#game").html("");
        var number = parseInt($("#input").val());
        var result = pingPong(number);
        showResult(result);
    });
    $("button#reverse").click(function(event) {
        event.preventDefault();
        // clear result before adding new
        $("#game").html("");
        var number = parseInt($("#input").val());
        var result = pingPongReverse(number);
        showResult(result);
    });
});
