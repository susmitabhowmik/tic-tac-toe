var player = 1;

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
