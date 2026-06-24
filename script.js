// JavaScript interaction: 点击按钮后，卡片依次淡入，并显示一句提示文字
const revealBtn = document.getElementById("revealBtn");
const cards = document.querySelectorAll(".card");
const hint = document.getElementById("hint");

let shown = false;

revealBtn.addEventListener("click", () => {
  if (!shown) {
    // 卡片逐个淡入（每张延迟一点）
    cards.forEach((card, i) => {
      setTimeout(() => card.classList.add("reveal"), i * 180);
    });
    hint.textContent = "卡片出现了！把鼠标移到卡片上看看 hover 上浮效果。";
    hint.classList.add("show");
    revealBtn.textContent = "隐藏卡片";
    shown = true;
  } else {
    // 再次点击：隐藏卡片
    cards.forEach((card) => card.classList.remove("reveal"));
    hint.classList.remove("show");
    hint.textContent = "";
    revealBtn.textContent = "显示卡片";
    shown = false;
  }
});
