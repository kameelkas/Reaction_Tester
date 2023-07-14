let start = Date.now(); //timer start

/*
shapeAppears() function sets the randomness of the shape. Controls
the size, color, look, and screen position of the shape that appears
on the screen. Utilizes Math.random() to create a new random shape each time.
*/
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

  start = Date.now(); //starts the timer as soon as the shape appears on the screen
}

/*
appearAfterDelay() function controls the random amount of time that passes
between when a shape is clicked and when a new shape appears on the screen.
*/
function appearAfterDelay() {
  setTimeout(shapeAppears, Math.random() * 2000 + 500);
}

appearAfterDelay(); //function call

//initializing average time, fastest time and time array values
let fastest = 0;
let times = [];
let ave = 0;

document.getElementById("shape").onclick = function () {
  document.getElementById("shape").style.display = "none"; //hides shape after its been clicked
  let end = Date.now(); //ends timer
  let elapsed = (end - start) / 1000; //calculates time taken to click the shape

  times.push(elapsed); //adds the calculated time to the times array

  //calculation of average time of all times recorded
  let total = 0;
  for (let i = 0; i < times.length; i++) {
    total += times[i];
  }

  //functionality to style color of the average time shown on screen depending on if the value increased/decreased
  unrounded = total / times.length;
  rounded = Math.round(unrounded * 1000) / 1000;
  if (ave == 0 || rounded < ave) {
    document.getElementById("ave").style.color = "lightblue";
  } else {
    document.getElementById("ave").style.color = "red";
  }

  ave = rounded;

  //showing all current values on the screen
  document.getElementById("timeTaken").innerHTML = elapsed + "s.";
  document.getElementById("ave").innerHTML = ave + "s.";

  //functionality to update fastest time
  if (fastest == 0 || elapsed < fastest) {
    fastest = elapsed;
    document.getElementById("fastest").innerHTML = fastest + "s.";
  }

  appearAfterDelay();
};

//functionality for what happens on screen when pause button is clicked
document.getElementById("pause").onclick = function() {
  document.getElementById("optionsScreen").style.display = "block";
  document.getElementById("page").classList.add("disable-clicks");
  document.getElementById("page").style.filter = "blur(2px)";

};

//functionality to resume to the game
document.getElementById("resumeButton").onclick = function() {
  document.getElementById("optionsScreen").style.display = "none";
  document.getElementById("page").classList.remove("disable-clicks");
  document.getElementById("page").style.filter = "none";
};

//functionality to restart game
document.getElementById("restartButton").onclick = function() {
  // Reset variables and clear displayed values
  fastest = 0;
  times = [];
  ave = 0;
  document.getElementById("fastest").innerHTML = "";
  document.getElementById("ave").innerHTML = "";
  document.getElementById("timeTaken").innerHTML = "";

  // Hide the options screen and remove the blur effect
  document.getElementById("page").classList.remove("disable-clicks");
  document.getElementById("optionsScreen").style.display = "none";
  document.getElementById("page").style.filter = "none";

  // Restart the game
  document.getElementById("shape").style.display = "none";
  appearAfterDelay();
  
};

//functionality to quit game. Redirects to the Github page of this project
document.getElementById("quitButton").onclick = function() {
  window.location.href = "https://github.com/kameelkas/Reaction_Tester";
}


//functionality to toggle between light and dark mode.
document.getElementById("click").onclick = function () {
  let page = document.getElementById("page");
  let button = document.getElementById("click");
  let stop = document.getElementById("pause");
  page.classList.toggle("containerDark");
  page.classList.toggle("containerLight");
  button.classList.toggle("darkMode");
  button.classList.toggle("lightMode");
  stop.classList.toggle("darkMode");
  stop.classList.toggle("lightMode");

};
