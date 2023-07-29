const onClickButton = () => {
  // 現在のタブのURLを取得
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentUrl = tabs[0].url;

    chrome.tabs.executeScript(
      tabs[0].id,
      {
        code: `document.querySelector('.qtext')?.value;`,
      },
      function (result) {
        const qtextValue = result[0];
        console.log("qtext value:", qtextValue);

        // popup表示
        const outputDiv = document.getElementById("output");
        outputDiv.textContent = `Current URL: ${currentUrl}\nqtext value: ${qtextValue}`;
      }
    );
  });
};

document.getElementById("onClick")?.addEventListener("click", onClickButton);
