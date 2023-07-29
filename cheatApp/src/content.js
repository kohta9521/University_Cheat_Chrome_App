// window.alert(
//   "画面内に小テストが表示された際に自動で解答を表示します。\n 現在の画面には小テストを見つけられなかったため解答ができませんでした。"
// );

function onClickButton() {
  const message = "すみません、テストの問題を認識できませんでした。";

  console.log(message);

  const outputElement = document.getElementById("ansertBox");
  outputElement.textContent = message;
}

document.getElementById("onClick")?.addEventListener("click", onClickButton);
