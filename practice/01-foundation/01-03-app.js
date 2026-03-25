const button = document.getElementById("check-button");
const message = document.getElementById("message");

if (button && message) {
  button.addEventListener("click", () => {
    message.textContent = "Git の状態確認は CLI で行います。";
  });
}
