//Функция скрытия первой секции
const mainSection = document.querySelector(".main");
const nodeSection = document.querySelector(".node");
const startBtn = document.querySelector(".popup-btn");
startBtn.addEventListener("click", () => {
  mainSection.style.display = "none";
  nodeSection.style.display = "flex";
});
