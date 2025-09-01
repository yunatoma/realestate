// src/js/firstview-slider.js

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".p-first-view__bg-image");
  let currentIndex = 0;

  function changeImage() {
    // 現在の画像を非表示にする
    images[currentIndex].classList.remove("is-active");

    // 次のインデックスを計算
    currentIndex = (currentIndex + 1) % images.length;

    // 次の画像を表示する
    images[currentIndex].classList.add("is-active");
  }

  // 2秒ごとにchangeImage関数を実行
  setInterval(changeImage, 3000);
});
