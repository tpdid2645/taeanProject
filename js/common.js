document.addEventListener("DOMContentLoaded", function () {
  const topBtn = document.querySelector(".top-btn");
  const containerHeight = document.querySelector(".container").offsetHeight;
  const viewHeight = window.innerHeight; /* 뷰포트의 높이 */
  const footer = document.querySelector(".footer-include");
  const viewTotalHeight = containerHeight - viewHeight;
  console.log(viewTotalHeight);

  function topBtnShow() {
    let top = parseInt(footer.getBoundingClientRect().top) + "px";
    let scrollValue = window.scrollY;
    if (scrollValue < 120) {
      topBtn.classList.remove("active");
    } else if (scrollValue > 120 && scrollValue < viewTotalHeight) {
      topBtn.classList.add("active");
      topBtn.style.top =
        parseInt(window.scrollY) + window.innerHeight - 100 + "px";
    } else {
      topBtn.style.top =
        window.scrollY + footer.getBoundingClientRect().top - 100 + "px";
    }
  }
  window.addEventListener("scroll", topBtnShow);
});
