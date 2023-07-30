const onClickBtn = () => {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
    const url = tabs[0].url;
    alert(url)
  })
}

document.getElementById('onClick')?.addEventListener('click', onClickBtn);


