// Simple animation starter demo
const box = document.getElementById("box");
const playBtn = document.getElementById("playBtn");

playBtn.addEventListener("click", () => {
  // Restart the animation each click by toggling the class
  box.classList.remove("play");
  // Force reflow so the animation can replay
  void box.offsetWidth;
  box.classList.add("play");
});

// Clean up the class once the animation finishes
box.addEventListener("animationend", () => {
  box.classList.remove("play");
});
