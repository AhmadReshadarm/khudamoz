const themBtn = document.querySelector(".loader-wapper");
const btnOutter = document.getElementById("them-mode-outer");
const btnInner = document.getElementById("them-mode-inner");
const overLayer = document.getElementById("overLayer");
const items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    items[i].classList.toggle("item-active");
  });
}

themBtn.addEventListener("click", () => {
  btnOutter.classList.toggle("loader-light");
  btnInner.classList.toggle("loader-moon");
  overLayer.classList.add("overLayer");
  setTimeout(() => {
    btnOutter.style.border = "2px dotted #222831";
    btnInner.classList.remove("sun");
    btnInner.classList.remove("loader-moon");
    btnInner.classList.add("moon");
  }, 350);
  setTimeout(() => {
    overLayer.classList.remove("overLayer");
  }, 500);
});
