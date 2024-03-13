document.addEventListener("DOMContentLoaded", function () {
  const followBtn = document.querySelectorAll(".follow-btn");
  /* 팔로우 버튼 누르면 체크 */
  followBtn.forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
      let select = e.target;
      select.classList.toggle("active");
      if(select.classList.contains("active")){
        select.innerText = "팔로우"
      }else{
        select.innerText = "팔로우하기"
      }
    })
  })
});/* 자바스크립트 끝 */
