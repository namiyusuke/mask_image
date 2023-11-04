// 5秒後にis-loadクラスをbodyに追加する関数
function addIsLoadClass() {
  document.body.classList.add("is-load");
}

// setTimeoutを使用して5秒後に関数を呼び出す
setTimeout(addIsLoadClass, 2000);
