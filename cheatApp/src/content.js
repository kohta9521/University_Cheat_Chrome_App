document.getElementById("onClick").addEventListener("click", onclickButton);

function onClickButton() {
  console.log("fuck you");
}

// window.alert(
//   "画面内に小テストが表示された際に自動で解答を表示します。\n 現在の画面には小テストを見つけられなかったため解答ができませんでした。"
// );

// function onClickButton() {
//   const message = "すみません、テストの問題を認識できませんでした。";

//   console.log(message);

//   const outputElement = document.getElementById("ansertBox");
//   outputElement.textContent = message;
// }

// document.getElementById("onClick")?.addEventListener("click", onClickButton);

// function onClickButton() {
//   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//     const url = tabs[0]?.url;

//     if (url) {
//       chrome.tabs.executeScript(
//         tabs[0].id,
//         {
//           code: `
//         const qtextElement = document.querySelector('.qtext);
//         const qtextValue = qtextElement?.value;
//         qtextValue;
//       `,
//         },
//         (result) => {
//           const qtextValue = result[0];
//           console.log("URL: ", url);
//           console.log("qtext value: ", qtextValue);

//           const message = `${qtextValue}`;

//           // html
//           const outputElement = document.getElementById("ansertBox");
//           outputElement.textContent = message;
//         }
//       );
//     }
//   });
// }

// document.getElementById("onClick")?.addEventListener("click", onClickButton);
