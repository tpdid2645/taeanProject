document.addEventListener("DOMContentLoaded", function () {
  /* 청년 검색 바 섹션 */
  /* supply-kind-box안의 버튼 클릭시 active toggle / supplyCopyBtnBox안에 클래스 활성화 된 애들만 들어오기  */
  const supplyBtns = document.querySelectorAll(".supply-kind-btns button");
  const supplyCopyBtnBox = document.querySelector(".supply-copy-btn-box");
  // 부모 요소에 이벤트 리스너 등록
  supplyCopyBtnBox.addEventListener("click", function (event) {
    // 클릭된 요소가 버튼인지 확인
    if (event.target.classList.contains("supply-copy-btn")) {
      // 클릭된 버튼의 텍스트 가져오기
      const clickedText = event.target.textContent.trim();
      // supplyBtns에서 텍스트가 일치하는 버튼을 찾아서 active 클래스 제거
      supplyBtns.forEach((btn) => {
        if (btn.textContent.trim() === clickedText) {
          btn.classList.remove("active");
        }
      });
    }
  });

  /* 중복 값 제거 */
  const buttonTexts = [];
  supplyBtns.forEach((supplyBtn) => {
    supplyBtn.addEventListener("click", function (event) {
      const selectedBtn = event.target;
      selectedBtn.classList.toggle("active");
      // supplyBtn이 활성화되었을 때
      if (selectedBtn.classList.contains("active")) {
        // 버튼 텍스트가 배열에 이미 존재하는지 확인
        if (!buttonTexts.includes(selectedBtn.textContent)) {
          // 새로운 버튼 추가
          const newCopyBtn = document.createElement("button");
          newCopyBtn.classList.add("supply-copy-btn");
          newCopyBtn.innerHTML = selectedBtn.textContent.trim();
          console.log(selectedBtn.textContent);
          supplyCopyBtnBox.appendChild(newCopyBtn);
        }
      } else {
        // supplyBtn이 비활성화되었을 때
        // 해당 버튼과 동일한 내용을 가진 버튼 찾아 제거
        const copyBtns = supplyCopyBtnBox.querySelectorAll(".supply-copy-btn");
        copyBtns.forEach((copyBtn) => {
          if (copyBtn.textContent === selectedBtn.textContent) {
            copyBtn.remove();
          }
        });
        // 배열에서 버튼 텍스트 제거
        const index = buttonTexts.indexOf(selectedBtn.textContent);
        if (index !== -1) {
          buttonTexts.splice(index, 1);
        }
      }
    });
  });
  /* 초기화 버튼 클릭시 버튼 모든 클래스, supplyCopyBtnBox 내용물 삭제 */
  const supplyReBtn = document.querySelector(".supply-re-btn");
  supplyReBtn.addEventListener("click", () => {
    supplyBtns.forEach((ele) => {
      ele.classList.remove("active");
    });
    supplyCopyBtnBox.innerHTML = "";
  });
  /* supplyCopyBtn 누르면 자기자신 삭제 */
  document.addEventListener("click", function (event) {
    let selected = event.target;
    if (selected.classList.contains("supply-copy-btn")) {
      selected.remove();
    }
  });
  /* 각 전체 버튼 클릭시 전체버튼을 제외한 해당영역 버튼 active 클래스 삭제 */
  /* 반대로 해당영역 버튼 클릭시 전체버튼 active 클래스 삭제 */
  const ageAllBtn = document.querySelector(".age-all-btn");
  const locationAllBtn = document.querySelector(".location-all-btn");
  const fieldAllBtn = document.querySelector(".field-all-btn");
  const stateAllBtn = document.querySelector(".state-all-btn");

  const supplyAgeBtn = document.querySelectorAll(".supply-age-btn");
  const supplyLocationBtn = document.querySelectorAll(".supply-location-btn");
  const supplyFieldBtn = document.querySelectorAll(".supply-field-btn");
  const supplyStateBtn = document.querySelectorAll(".supply-state-btn");

  /* 각 전체 버튼 클릭시 전체버튼을 제외한 해당영역 버튼 active 클래스 삭제 */
  ageAllBtn.addEventListener("click", function () {
    ageAllBtn.classList.add("active");
    supplyAgeBtn.forEach((ele) => {
      ele.classList.remove("active");
    });
  });
  locationAllBtn.addEventListener("click", function () {
    locationAllBtn.classList.add("active");
    supplyLocationBtn.forEach((ele) => {
      ele.classList.remove("active");
    });
  });
  fieldAllBtn.addEventListener("click", function () {
    fieldAllBtn.classList.add("active");
    supplyFieldBtn.forEach((ele) => {
      ele.classList.remove("active");
    });
  });
  stateAllBtn.addEventListener("click", function () {
    stateAllBtn.classList.add("active");
    supplyStateBtn.forEach((ele) => {
      ele.classList.remove("active");
    });
  });
  /* 반대로 해당영역 버튼 클릭시 전체버튼 active 클래스 삭제 */
  supplyAgeBtn.forEach((ele) => {
    ele.addEventListener("click", () => {
      ageAllBtn.classList.remove("active");
    });
  });
  supplyLocationBtn.forEach((ele) => {
    ele.addEventListener("click", () => {
      locationAllBtn.classList.remove("active");
    });
  });
  supplyFieldBtn.forEach((ele) => {
    ele.addEventListener("click", () => {
      fieldAllBtn.classList.remove("active");
    });
  });
  supplyFieldBtn.forEach((ele) => {
    ele.addEventListener("click", () => {
      fieldAllBtn.classList.remove("active");
    });
  });
  supplyStateBtn.forEach((ele) => {
    ele.addEventListener("click", () => {
      stateAllBtn.classList.remove("active");
    });
  });
}); /* document ready 끝 */
