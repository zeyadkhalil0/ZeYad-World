const dark = document.getElementById("dark");
const body = document.getElementById("body");

dark.addEventListener("click", (eo) => {
  body.classList.toggle("dark");
  landing.classList.toggle("dark");
});

let nums = document.querySelectorAll(".stats .number");
let section = document.querySelector(".stats");
let started = false; // Function Started? No

// Stats Increase Number
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((number) => startCount(number));
    }

    started = true; // Set to true to prevent rerunning
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// icon change mood
const mood = document.getElementById("dark");

mood.onclick = function () {
  document.body.classList.toggle("body");
  if (document.body.classList.contains("body")) {
    mood.src = "imgs/sun.png";
  } else {
    mood.src = "imgs/moon.png";
  }
};
