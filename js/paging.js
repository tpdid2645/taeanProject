document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.querySelector(".prev-page");
  const nextBtn = document.querySelector(".next-page");
  const toFirstBtn = document.querySelector(".prev-double-page");
  const toLastBtn = document.querySelector(".next-double-page");
  const numbers = document.querySelectorAll(".number");

  /* numbers를 눌렀을때 페이징 */
  numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
      numbers.forEach((num) => {
        num.classList.remove("active");
      });
      event.currentTarget.classList.add("active");
    });
  });
  /* nextBtn누를때 페이징 */
  nextBtn.addEventListener("click", () => {
    const activeIndex = [...numbers].findIndex((num) =>
      num.classList.contains("active")
    );
    if (activeIndex !== -1 && activeIndex < numbers.length - 1) {
      numbers.forEach((num, index) => {
        num.classList.remove("active");
        if (index === activeIndex + 1) {
          num.classList.add("active");
        }
      });
    }
  });
  /* prevBtn누를때 페이징 */
  prevBtn.addEventListener("click", () => {
    const activeIndex = [...numbers].findIndex((num) =>
      num.classList.contains("active")
    );
    if (activeIndex > 0) {
      numbers.forEach((num, index) => {
        num.classList.remove("active");
        if (index === activeIndex - 1) {
          num.classList.add("active");
        }
      });
    }
  });
  /* toFirstBtn클릭 */
  toFirstBtn.addEventListener("click", () => {
    numbers.forEach((num, index) => {
      num.classList.remove("active");
      if (index === 0) {
        num.classList.add("active");
      }
    });
  });
  /* toLastBtn 클릭 */
  toLastBtn.addEventListener("click", () => {
    numbers.forEach((num, index) => {
      num.classList.remove("active");
      if (index === numbers.length - 1) {
        num.classList.add("active");
      }
    });
  });
}); 
/* 자바스크립트 끝 */
