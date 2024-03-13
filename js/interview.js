document.addEventListener("DOMContentLoaded", function () {
  const allBtn = document.querySelector(".all-btn");
  const empBtn = document.querySelector(".emp-btn");
  const foundBtn = document.querySelector(".found-btn");
  const statusBtn = document.querySelectorAll(".status-btn");
  const siteLocation = document.querySelectorAll(".site-location");
  const sectionLocationBox = document.querySelector(
    ".section-location-box"
  );

  statusBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      // 클릭된 버튼의 텍스트를 가져오기
      const buttonText = btn.textContent.trim();
      // 취업성공기, 창업성공기, 전체보기 링크 찾기
      const empLink = sectionLocationBox.querySelector(".emp-link");
      const foundLink = sectionLocationBox.querySelector(".found-link");
      const allLink = sectionLocationBox.querySelector(".all-link");
      // 새로운 a 태그를 생성.
      const newLink = document.createElement("a");
      // a 태그의 텍스트를 클릭된 버튼의 텍스트로 설정.
      newLink.textContent = buttonText;
      // 클릭된 버튼에 따라 링크를 새로 설정.
      if (buttonText === "취업분야") {
        // 전체보기 링크가 있으면 삭제.
        if (allLink) {
          allLink.remove();
        }
        // 창업성공기 링크가 있으면 삭제.
        if (foundLink) {
          foundLink.remove();
        }
        // 취업성공기 링크를 새로운 링크로 대체.
        if (!empLink) {
          sectionLocationBox.appendChild(newLink);
          newLink.classList.add("emp-link");
        }
      } else if (buttonText === "창업분야") {
        // 전체보기 링크가 있으면 삭제.
        if (allLink) {
          allLink.remove();
        }
        // 취업성공기 링크가 있으면 삭제.
        if (empLink) {
          empLink.remove();
        }
        // 창업성공기 링크를 새로운 링크로 대체.
        if (!foundLink) {
          sectionLocationBox.appendChild(newLink);
          newLink.classList.add("found-link");
        }
      } else if (buttonText === "전체보기") {
        // 취업성공기 링크가 있으면 삭제.
        if (empLink) {
          empLink.remove();
        }
        // 창업성공기 링크가 있으면 삭제.
        if (foundLink) {
          foundLink.remove();
        }
        // 전체보기 링크를 새로운 링크로 대체.
        if (!allLink) {
          sectionLocationBox.appendChild(newLink);
          newLink.classList.add("all-link");
        }
      }
    });
  });
}); /* 자바스크립트 끝 */
