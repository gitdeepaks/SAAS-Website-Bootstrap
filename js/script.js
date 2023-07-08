const checkReplace = document.querySelector(".replace-me");
if (checkReplace !== null) {
  const replace = new ReplaceMe(document.querySelector(".replace-me"), {
    animation: "animated fadeIn",
    speed: 2000,
    separator: ",",
    loopCount: "infinite",
    autoRun: true,
  });
}

// User Scroll For Navbar
function userScroll() {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-dark");
      navbar.classList.add("border-bottom");
      navbar.classList.add("border-secondary");
      navbar.classList.add("navbar-sticky");
    } else {
      navbar.classList.remove("bg-dark");
      navbar.classList.remove("border-bottom");
      navbar.classList.remove("border-secondary");
      navbar.classList.remove("navbar-sticky");
    }
  });
}

// Video Modal
const videoBtn = document.querySelector(".video-btn");
const videoModal = document.querySelector("#videoModal");
const video = document.querySelector("#video");
let videoSrc;

if (videoBtn !== null) {
  videoBtn.addEventListener("click", function (e) {
    videoSrc = videoBtn.getAttribute("data-bs-src");
  });
}

if (videoModal !== null) {
  videoModal.addEventListener("shown.bs.modal", (e) => {
    video.setAttribute(
      "src",
      videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });

  videoModal.addEventListener("hide.bs.modal", (e) => {
    video.setAttribute("src", videoSrc);
  });
}

document.addEventListener("DOMContentLoaded", userScroll);
