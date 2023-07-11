let start = Date.now();

function shapeAppears() {
  let top = Math.random() * 40;
  let left = Math.random() * 40;
  let size = Math.random() * 200 + 50;
  let red = Math.random() * 255;
  let green = Math.random() * 255;
  let blue = Math.random() * 255;
  let radius = Math.floor(Math.random() * 100);
  document.getElementById("shape").style.borderRadius = `${radius}%`;
  document.getElementById(
    "shape"
  ).style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  document.getElementById("shape").style.width = size + "px";
  document.getElementById("shape").style.height = size + "px";
  document.getElementById("shape").style.top = top + "vh";
  document.getElementById("shape").style.left = left + "vw";
  document.getElementById("shape").style.display = "block";

  start = Date.now();
}

function appearAfterDelay() {
  setTimeout(shapeAppears, Math.random() * 2000 + 500);
}

appearAfterDelay();
let fastest = 0;
let times = [];
let ave = 0;

document.getElementById("shape").onclick = function () {
  document.getElementById("shape").style.display = "none";
  let end = Date.now();
  let elapsed = (end - start) / 1000;

  times.push(elapsed);
  let total = 0;
  for (let i = 0; i < times.length; i++) {
    total += times[i];
  }

  unrounded = total / times.length;
  rounded = Math.round(unrounded * 1000) / 1000;
  if (ave == 0 || rounded < ave) {
    document.getElementById("ave").style.color = "lightblue";
  } else {
    document.getElementById("ave").style.color = "red";
  }

  ave = rounded;

  document.getElementById("timeTaken").innerHTML = elapsed + "s.";
  document.getElementById("ave").innerHTML = ave + "s.";

  if (fastest == 0 || elapsed < fastest) {
    fastest = elapsed;
    document.getElementById("fastest").innerHTML = fastest + "s.";
  }

  appearAfterDelay();
};

document.getElementById("click").onclick = function () {
  let page = document.getElementById("page");
  let button = document.getElementById("click");
  page.classList.toggle("containerDark");
  page.classList.toggle("containerLight");
  button.classList.toggle("darkMode");
  button.classList.toggle("lightMode");
};
