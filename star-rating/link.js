export default function addLink() {
  let head = document.querySelector("head");

  // star-rating 요소의 재사용성을 높이기 위해  star-rating 요소 내부의 css는 JavaScript로 자동 추가한다.
  let link = document.createElement("link");
  link.href = "star-rating/theme.css";
  link.rel = "stylesheet";
  // link.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";

  let linkEnd =
    head.querySelectorAll("link")[head.querySelectorAll("link").length - 1];
  linkEnd.insertAdjacentElement("afterend", link);
}
