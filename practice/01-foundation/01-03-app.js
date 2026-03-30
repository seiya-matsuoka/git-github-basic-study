const button = document.getElementById("check-button");
const message = document.getElementById("message");

if (button && message) {
  button.addEventListener("click", () => {
    console.log("feature branch practice");
    message.textContent = "この変更は feature branch 側で作られています。";
  });
}
