const button = document.getElementById("restore-button");
const message = document.getElementById("message");

if (button && message) {
  button.addEventListener("click", () => {
    message.textContent = "初期状態のメッセージです。";
  });
}
