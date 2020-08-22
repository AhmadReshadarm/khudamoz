const themBtn = document.querySelector(".loader-wapper");
const btnOutter = document.getElementById("them-mode-outer");
const btnInner = document.getElementById("them-mode-inner");
const overLayer = document.getElementById("overLayer");
const items = document.querySelectorAll(".header-category");
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

const category_wrapper = document.querySelector(".categories-wrapper");
const scroll_left_btn = document.querySelector(".scroll-left");
const scroll_right_btn = document.querySelector(".scroll-right");
const scroll_animat_btn = document.querySelectorAll(".scroll a svg");
const scroll_step = 200;

for (let i = 0; i < scroll_animat_btn.length; i++) {
  scroll_animat_btn[i].addEventListener("click", () => {
    scroll_animat_btn[i].classList.add("scroll_animation");
    setTimeout(() => {
      scroll_animat_btn[i].classList.remove("scroll_animation");
    }, 150);
  });
}

scroll_right_btn.addEventListener("click", () => {
  let scroll_left = category_wrapper.scrollLeft;
  let scroll_width = category_wrapper.scrollWidth;
  if (scroll_left + scroll_step >= scroll_width - 900) {
    category_wrapper.scrollTo(scroll_width, 0);
    scroll_right_btn.classList.add("d-none");
  } else {
    category_wrapper.scrollTo(scroll_left + scroll_step, 0);
    scroll_left_btn.classList.remove("d-none");
  }
});

scroll_left_btn.addEventListener("click", () => {
  let scroll_left = category_wrapper.scrollLeft;
  if (scroll_left - scroll_step <= 0) {
    category_wrapper.scrollTo(0, 0);
    scroll_left_btn.classList.add("d-none");
  } else {
    category_wrapper.scrollTo(scroll_left - scroll_step, 0);
    console.log(scroll_left - scroll_step);
    scroll_right_btn.classList.remove("d-none");
  }
});

//-------------------------------- filter category animation --------------------------

const filter_category = document.querySelectorAll(".category");
for (let i = 0; i < filter_category.length; i++) {
  filter_category[i].addEventListener("click", () => {
    filter_category[i].classList.toggle("category-active");
  });
}

// ----------------------------- filter dropdown aniation button ------------------------

const filter_dropdown_btn = document.querySelector(
  ".filter-extra-dropdown-btn a"
);
const filter_container = document.querySelector(".filter-dropdown-container");
const filter_active_btn = document.querySelector(".filter-extra-dropdown-btn");

filter_dropdown_btn.addEventListener("click", () => {
  filter_container.classList.toggle("d-none");
  filter_active_btn.classList.toggle("filter-extra-active-btn");
});

// heart elemetn

{
  /* <path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path>; */
}
//
//
