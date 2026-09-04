function display(n) {
  let screen = document.getElementById("display");
  screen.value += n;
}

function clearD() {
  document.getElementById("display").value = "";
}

function back() {
  document.getElementById("display").value = document
    .getElementById("display")
    .value.slice(0, -1);
}

function op() {
  document.getElementById("display").value = eval(
    document.getElementById("display").value,
  );
}
