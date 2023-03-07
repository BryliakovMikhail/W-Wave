// search

let searchBtn = document.querySelector(".search-btn");
let searchBox = document.querySelector(".search-box");

searchBtn.addEventListener(
  "click",

  function () {
    searchBtn.classList.toggle("search-btn--active");

    searchBox.classList.toggle("search-box--active");
  }
);

document.addEventListener("click", (e) => {
  const click = e.composedPath().includes(searchBox);
  const btnclick = e.composedPath().includes(searchBtn);
  if (!click && !btnclick) {
    searchBtn.classList.remove("search-btn--active");
    searchBox.classList.remove("search-box--active");
  }
});

//player

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".play__btn").forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.toggle("play__btn--active");
    });
  });
});

//player podcast

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".podcast__item-link").forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.toggle("podcast__btn-play--active");
    });
  });
});

//select
const element = document.querySelector(".select");
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  emoveItems: true,
  shouldSort: false,
});

//accordion

new Accordion(".accordion-list", {
  elementClass: "accordion",
  triggerClass: "accordion__control",
  panelClass: "accordion__content",
  activeClass: "accordion--active",
  openOnInit: [0],
});

// tabs

document.querySelectorAll(".tabs-nav__btn").forEach(function (tabsBtn) {
  tabsBtn.addEventListener("click", function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll(".tabs-nav__btn").forEach(function (btn) {
      btn.classList.remove("tabs-nav__btn--active");
    });
    e.currentTarget.classList.add("tabs-nav__btn--active");
    document.querySelectorAll(".tabs-item").forEach(function (tabsBtn) {
      tabsBtn.classList.remove("tabs-item--active");
    });
    document
      .querySelector(`[data-target="${path}"]`)
      .classList.add("tabs-item--active");
  });
});

// swiper

const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 4,
  loop: true,
  spaceBetween: 30,
  variableWidth: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 2.3,
      spaceBetween: 19,
    },

    671: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1260: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// validation

const validation = new JustValidate(
  "#about-us_form",

  {
    errorLabelStyle: {
      color: "#D52B1E",
      fontSize: "12" + "px",
    },

  }
);

validation
  .addField(
    "#form-name",
    [
      {
        rule: "required",
        errorMessage: "Ошибка",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Минимальное колличество символов 3",
      },
      {
        rule: "maxLength",
        value: 30,
        errorMessage: "Максимальное колличество символов 30",
      },
    ],
    {
      errorsContainer: ".errors-container_name",
    }
  )
  .addField(
    "#form-email",
    [
      {
        rule: "required",
        errorMessage: "Ошибка",
      },
      {
        rule: "email",
        errorMessage: "Не корректный email",
      },
    ],
    {
      errorsContainer: ".errors-container_email",
    }
  )
  .addField(
    "#form-comment",
    [
      {
        rule: "required",
        errorMessage: "Ошибка",
      },
    ],
    {
      errorsContainer: ".errors-container_comment",
    }
  )
  .addField(
    "#check-form",
    [
      {
        rule: "required",
        errorMessage: "Согласие обязательно :)",
      },
    ],
    {
      errorsContainer: ".errors-container_check",
    }
  );

const validationModal = new JustValidate(
  "#modal-form",

  {
    errorLabelStyle: {
      color: "#D52B1E",
      fontSize: "12" + "px",
    },
  }
);

validationModal
  .addField(
    "#login",
    [
      {
        rule: "required",
        errorMessage: "Ошибка",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Минимальное колличество символов 3",
      },
      {
        rule: "maxLength",
        value: 30,
        errorMessage: "Максимальное колличество символов 30",
      },
    ],
    {
      errorsContainer: ".errors-container_login",
    }
  )
  .addField(
    "#password",
    [
      {
        rule: "required",
        errorMessage: "Ошибка",
      },
    ],
    {
      errorsContainer: ".errors-container_password",
    }
  );

// burger

let burger = document.querySelector(".burger");
let menu = document.querySelector(".header__nav");
let menuMobile = document.querySelector(" .mobile-nav");
let menuLinks = document.querySelectorAll(".menu-link");

burger.addEventListener(
  "click",

  function () {
    burger.classList.toggle("burger--active");

    menu.classList.toggle("header__nav--active");

    menu.style.transition =
      "visibility 0.3s ease-in-out, transform 0.3s ease-in-out";

    menuMobile.classList.toggle("mobile-nav--active");

    menuMobile.style.transition =
      "visibility 0.3s ease-in-out, transform 0.3s ease-in-out";

    document.body.classList.toggle("stop-scroll");
  }
);

menu.addEventListener("transitionend", function () {
  if (!menu.classList.contains("header__nav--active")) {
    menu.removeAttribute("style");
  }
});

menuMobile.addEventListener("transitionend", function () {
  if (!menu.classList.contains("mobile-nav--active")) {
    menu.removeAttribute("style");
  }
});

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");

    menu.classList.remove("header__nav--active");

    menuMobile.classList.remove("mobile-nav--active");

    document.body.classList.remove("stop-scroll");
  });
});

//accordion mobile header

new Accordion(".accordion-container", {
  elementClass: "accordion-mobile",
  triggerClass: "accordion-btn",
  panelClass: "ac-content",
  activeClass: "accordion-mobile--active",
});

// podcastMore

const btnMore = document.querySelector(".podcast__btn");
const articlesItems = document.querySelectorAll(".podcast__item");

btnMore.addEventListener("click", () => {
  articlesItems.forEach((el) => {
    el.classList.add("podcast__item--visible");
  });
  btnMore.closest(".podcast__btn").classList.add("podcast__btn--hidden");
});
