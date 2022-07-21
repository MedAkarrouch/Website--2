const x = window.matchMedia("(max-width:37.5em)");
const y = window.matchMedia("(max-width:25em)");
const z = window.matchMedia("(max-width:43.75em)");
const bgHeader = document.querySelector(".header");
const imgFirst = document.querySelector(".service__img--1");
const imgSecond = document.querySelector(".service__img--2");
const imgThird = document.querySelector(".service-bg--3");
const imgFourth = document.querySelector(".service-bg--4");
const tstFi = document.getElementById("tst-1");
const tstSe = document.getElementById("tst-2");
const tstTh = document.getElementById("tst-3");
const tstFo = document.getElementById("tst-4");
function changeImg3(z) {
  if (z.matches) {
    tstFi.src = "images/mobile/image-gallery-milkbottles.jpg";
    tstSe.src = "images/mobile/image-gallery-orange.jpg";
    tstTh.src = "images/mobile/image-gallery-cone.jpg";
    tstFo.src = "images/mobile/image-gallery-sugar-cubes.jpg";
  } else {
    tstFi.src = "images/desktop/image-gallery-milkbottles.jpg";
    tstSe.src = "images/desktop/image-gallery-orange.jpg";
    tstTh.src = "images/desktop/image-gallery-cone.jpg";
    tstFo.src = "images/desktop/image-gallery-sugarcubes.jpg";
  }
}

function changeImg2(y) {
  if (y.matches) {
    imgThird.style.backgroundImage =
      "url(images/mobile/image-graphic-design.jpg)";
    imgFourth.style.backgroundImage =
      "url(images/mobile/image-photography.jpg)";
  } else {
    imgThird.style.backgroundImage =
      "url(images/desktop/image-graphic-design.jpg)";
    imgFourth.style.backgroundImage =
      "url(images/desktop/image-photography.jpg)";
  }
}
function changeImg(x) {
  if (x.matches) {
    // If media query matches
    // imgHeader.style.back
    bgHeader.style.backgroundImage = "url(images/mobile/image-header.jpg)";
    imgFirst.src = "images/mobile/image-transform.jpg";
    imgSecond.src = "images/mobile/image-stand-out.jpg";
  } else {
    imgFirst.src = "images/desktop/image-transform.jpg";
    imgSecond.src = "images/desktop/image-stand-out.jpg";
    bgHeader.style.backgroundImage = "url(images/desktop/image-header.jpg)";
  }
}
changeImg(x);
changeImg2(y);
changeImg3(z);
x.addListener(changeImg);
y.addListener(changeImg2);
z.addListener(changeImg3);

// const btns
const btnsContainer = document.querySelector(".header__btns");
const btns = document.querySelectorAll(".btn");
const btnMenu = document.getElementById("show");

const links = document.querySelectorAll(".link");
const allLinks = document.querySelectorAll("a");

const list = document.querySelector(".header__list");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(btn);
    btnsContainer.classList.toggle("hidden");
    list.classList.toggle("translate");
  });
});

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    href = link.getAttribute("href");

    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
      if (list.classList.contains("translate")) {
        list.classList.remove("translate");
        btnsContainer.classList.toggle("hidden");
      }
    }
  });
});
