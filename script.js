document.addEventListener("DOMContentLoaded", () => {
  const animateBtn = document.getElementById("animateBtn");
  const animImage = document.getElementById("animImage");
  const bgColorPicker = document.getElementById("bgColor");

  // Load saved background color from localStorage
  const savedColor = localStorage.getItem("bgColor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    bgColorPicker.value = savedColor;
  }

  // Save background color to localStorage
  bgColorPicker.addEventListener("input", () => {
    const color = bgColorPicker.value;
    document.body.style.backgroundColor = color;
    localStorage.setItem("bgColor", color);
  });

  // Animate the image when button is clicked
  animateBtn.addEventListener("click", () => {
    animImage.classList.remove("bounce");
    void animImage.offsetWidth; // reflow to restart animation
    animImage.classList.add("bounce");
  });
});