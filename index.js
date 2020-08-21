const themBtn = document.querySelector(".loader-wapper");
const btnOutter = document.getElementById("them-mode-outer");
const btnInner = document.getElementById("them-mode-inner");
const overLayer = document.getElementById("overLayer");
const items = document.querySelectorAll(".category");
const btn_dropdown = document.querySelector(".animation-btn");
const btn_dropdown_animitaion = document.querySelector(".btn-dropdown-link");
const dropdown_options = document.querySelector(".btn-dropdown-options");
const active_option = document.querySelectorAll(".btn-dropdown-options ul a");
const btn_inner_text = document.querySelector(".btn-dropdown-link span");

for (let i = 0; i < active_option.length; i++) {
  active_option[i].addEventListener("click", () => {
    for (let j = 0; j < active_option.length; j++) {
      active_option[j].classList.remove("isActive");
    }
    const innerText = active_option[i].innerText;
    active_option[i].classList.add("isActive");
    btn_inner_text.innerText = innerText;
  });
}

window.addEventListener("click", (e) => {
  if (
    e.target.matches(".btn-dropdown-link span") ||
    e.target.matches(".btn-dropdown-link") ||
    e.target.matches(".btn-dropdown-link svg") ||
    e.target.matches(".btn-dropdown-link svg path")
  ) {
    return;
  } else {
    dropdown_options.classList.add("d-none");
    btn_dropdown.classList.remove("btn-arrow-open");
  }
});

const all_links = document.querySelectorAll("a");
for (let i = 0; i < all_links.length; i++) {
  all_links[i].addEventListener("click", (e) => {
    e.preventDefault();
  });
}

btn_dropdown_animitaion.addEventListener("click", () => {
  btn_dropdown.classList.toggle("btn-arrow-open");
  dropdown_options.classList.toggle("d-none");
});

//--------------------------------------
for (let i = 0; i < items.length; i++) {
  items[i].addEventListener("click", () => {
    items[i].classList.toggle("category-active");
  });
}

// --------------------------------------------------------------------------
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

// heart elemetn

{
  /* <path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path>; */
}
