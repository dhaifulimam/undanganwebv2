const hamburger = document.querySelector(".navbar-toggler");
const mynavbar = document.querySelector(".mynavbar");
const offcanvas = document.querySelector(".offcanvas");
const rootElement = document.querySelector(":root");
const audioIconWrapper = document.querySelector(".audio-icon-wrapper");
const song = document.querySelector("#song");
let isplaying = false;
const audioIcon = document.querySelector(".audio-icon-wrapper i");
// const myDate = document.querySelector("#myDate");
// const countDown = document.querySelector(".simply-countdown");
const seeMore = document.querySelector("#seeMore");

function disableScroll() {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageYOffset || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(0, 0);
  };

  rootElement.style.overflowY = "hidden";

  rootElement.style.scrollBehavior = "auto";
}

seeMore.addEventListener("click", function () {
  enableScroll();
  seeMore.style.display = "none";
});

function enableScroll() {
  window.onscroll = function () {};
  rootElement.style.overflowY = "visible";
  rootElement.style.scrollBehavior = "smooth";

  // localStorage.setItem("opened", "true");
  window.location.href = "#home";
  playAudio();
  isplaying = true;
  AOS.init();
  hamburger.addEventListener("click", function () {
    mynavbar.style.overflow = "visible";
  });

  offcanvas.addEventListener("hidden.bs.offcanvas", function () {
    mynavbar.style.overflow = "hidden";
  });
}

audioIconWrapper.addEventListener("click", function () {
  if (isplaying) {
    song.pause();
    audioIcon.classList.remove("bi-disc");
    audioIcon.classList.add("bi-pause-circle");
  } else {
    song.play();
    audioIcon.classList.add("bi-disc");
    audioIcon.classList.remove("bi-pause-circle");
  }
  isplaying = !isplaying;
});

function playAudio() {
  song.volume = 0.1;
  audioIconWrapper.style.display = "flex";
  song.play();
}

// if (!localStorage.getItem("opened")) {
//   disableScroll();
// }

disableScroll();

// offcanvas.addEventListener("show.bs.offcanvas", function () {
//   mynavbar.style.overflow = "visible";
// });

// Submiting form

// window.addEventListener("load", function () {
//   const form = document.getElementById("my-form");
//   form.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const data = new FormData(form);
//     const action = e.target.action;
//     fetch(action, {
//       method: "POST",
//       body: data
//     }).then(() => {
//       alert("Konfirmasi Kehadiran Berhasil!");
//     });
//   });
// });

// nama yang diundang

const urlParams = new URLSearchParams(window.location.search);
const nama = urlParams.get("n") || "";
const pronoun = urlParams.get("p") || "Bapak/Ibu/Saudara/i";

// console.log(nama);

const namaContainer = document.querySelector(".hero h4 span");

namaContainer.innerText = `${pronoun} ${nama},`.replace(/ ,$/, ",");

document.querySelector("#nama").value = nama;
