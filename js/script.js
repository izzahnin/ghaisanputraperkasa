const menuToggle = document.getElementById("toggle-button");
const naviList = document.getElementById("navi-list");

menuToggle.addEventListener("click", function () {
  naviList.classList.toggle("active");
});
