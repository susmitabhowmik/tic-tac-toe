var player = 1;

// var buttonArray = [
//   [
//     document.getElementById("00"),
//     document.getElementById("01"),
//     document.getElementById("02")
//   ],
//   [
//     document.getElementById("10"),
//     document.getElementById("11"),
//     document.getElementById("12")
//   ],
//   [
//     document.getElementById("20"),
//     document.getElementById("21"),
//     document.getElementById("22")
//   ]
// ];

function changeText(id) {
  if (player === 1) { 
    document.getElementById(id).innerHTML = "X";
    document.getElementById(id).disabled = true;
    player = 2;
  } else {
    document.getElementById(id).innerHTML = "O";
    document.getElementById(id).disabled = true;
    player = 1;
  }
}

function getText(id) {
  return document.getElementById(id).innerHTML;
}

function winner() {
  //horizonal
  //00,01,02
  //10,11,12
  //20,21,22

  //vertical 
  //00,10,20
  //01,11,21
  //02,12,22

  //diagnol
  //00,11,22
  //02,11,21
  if ((getText("00") === getText("01")) && (getText("00") !== '.') && (getText("01") === getText("02"))) {
    if (getText("00") === "X") {
      document.getElementById("winning").innerHTML = "Player One Wins!";
    } else {
      document.getElementById("winning").innerHTML = "Player Two Wins!";
    }
  } else if ((getText("10") === getText("11")) && (getText("10") !== '.') && (getText("11") === getText("12"))) {
    if (getText("10") === "X") {
      document.getElementById("winning").innerHTML = "Player One Wins!";
    } else {
      document.getElementById("winning").innerHTML = "Player Two Wins!";
    }
  } else if ((getText("20") === getText("21")) && (getText("20") !== '.') && (getText("21") === getText("22"))) {
    if (getText("20") === "X") {
      document.getElementById("winning").innerHTML = "Player One Wins!";
    } else {
      document.getElementById("winning").innerHTML = "Player Two Wins!";
    } 
  } else if ((getText("00") === getText("10")) && (getText("00") !== '.') && (getText("10") === getText("20"))) {
    if (getText("00") === "X") {
      document.getElementById("winning").innerHTML = "Player One Wins!";
    } else {
      document.getElementById("winning").innerHTML = "Player Two Wins!";
    } 
  } else if ((getText("01") === getText("11")) && (getText("01") !== '.') && (getText("11") === getText("21"))) {
    if (getText("01") === "X") {
      document.getElementById("winning").innerHTML = "Player One Wins!";
    } else {
      document.getElementById("winning").innerHTML = "Player Two Wins!";
    }
  } else if ((getText("02") === getText("12")) && (getText("02") !== '.') && (getText("12") === getText("22"))) {
    if (getText("02") === "X") {
      document.getElementById("winning").innerHTML = "Player One Wins!";
    } else {
      document.getElementById("winning").innerHTML = "Player Two Wins!";
    }
  } else if ((getText("00") === getText("11")) && (getText("00") !== '.') && (getText("11") === getText("22"))) {
    if (getText("22") === "X") {
      document.getElementById("winning").innerHTML = "Player One Wins!";
    } else {
      document.getElementById("winning").innerHTML = "Player Two Wins!";
    }
  } else if ((getText("02") === getText("11")) && (getText("02") !== '.') && (getText("11") === getText("20"))) {
    if (getText("02") === "X") {
      document.getElementById("winning").innerHTML = "Player One Wins!";
    } else {
      document.getElementById("winning").innerHTML = "Player Two Wins!";
    }
  } else if ((getText("01") !== ".") && (getText("02") !== ".") && (getText("10") !== ".") && (getText("11") !== ".") && (getText("12") !== ".") && (getText("20") !== ".") && (getText("21") !== ".") && (getText("22") !== ".") && (getText("00") !== ".")) {
    document.getElementById("winning").innerHTML = "Draw.";
  }

}




