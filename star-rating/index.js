// do something!
function StarRating($container) {
  $container.classList.add("star-rating-container");
  let starNum = $container.dataset.maxRating;

  let count = 0;
  for (let i = 0; i < starNum; i++) {
    let icon = document.createElement("i");
    icon.classList.add("bx");
    icon.classList.add("bxs-star");
    $container.appendChild(icon);

    $container
      .querySelectorAll(".bx")
      [i].addEventListener("mouseover", function () {
        for (let j = 0; j < i + 1; j++) {
          $container.querySelectorAll(".bx")[j].classList.add("hovered");
        }
      });

    $container
      .querySelectorAll(".bx")
      [i].addEventListener("mouseout", function () {
        for (let j = 0; j < i + 1; j++) {
          $container.querySelectorAll(".bx")[j].classList.remove("hovered");
        }
      });

    $container
      .querySelectorAll(".bx")
      [i].addEventListener("click", function () {
        for (let j = 0; j <= i; j++) {
          while (count > i) {
            $container
              .querySelectorAll(".bx")
              [count].classList.remove("selected");
            count--;
          }

          $container.querySelectorAll(".bx")[j].classList.add("selected");
          count = j;
        }

        let currentRating = String(i + 1);
        let change = new CustomEvent("rating-change", {
          detail: currentRating,
        });
        $container.dispatchEvent(change);
      });
  }
}

export default StarRating;
