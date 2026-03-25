const button = document.getElementById("check-button");
const message = document.getElementById("message");

if (button && message) {
  button.addEventListener("click", () => {
    message.textContent = "add → commit の流れを CLI で確認します。";
  });
}
