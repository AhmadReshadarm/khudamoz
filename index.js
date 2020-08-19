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

// arrow element
// <svg>
//   <path d="M21.5265 8.77171C22.1578 8.13764 22.1578 7.10962 21.5265 6.47555C20.8951 5.84148 19.8714 5.84148 19.24 6.47555L11.9999 13.7465L4.75996 6.47573C4.12858 5.84166 3.10492 5.84166 2.47354 6.47573C1.84215 7.10979 1.84215 8.13782 2.47354 8.77188L10.8332 17.1671C10.8408 17.1751 10.8486 17.183 10.8565 17.1909C11.0636 17.399 11.313 17.5388 11.577 17.6103C11.5834 17.6121 11.5899 17.6138 11.5964 17.6154C12.132 17.7536 12.7242 17.6122 13.1435 17.1911C13.1539 17.1807 13.1641 17.1702 13.1742 17.1596L21.5265 8.77171Z"></path>
// </svg>;

// heart elemetn

{
  /* <path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path>; */
}
