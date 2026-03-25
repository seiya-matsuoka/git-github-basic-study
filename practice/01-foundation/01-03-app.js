const button = document.getElementById("check-button");
const message = document.getElementById("message");

if (button && message) {
  button.addEventListener("click", () => {
    console.log("01-05 diff/log lesson");
    message.textContent = "差分確認と履歴確認はどちらも重要です。";
  });
}
