import "./styles.css";

const onclickAdd = () => {
  //テキストボックスの値を取得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //完了ボタンを追加
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
    //押された完了ボタンの親要素のdivタグをcomplete-listに移動する
    deleteFromICList(completeButton.parentNode);
    //   const deleteTarget = completeButton.parentNode;
    //   document.getElementById("imcomplete-list").removeChild(deleteTarget);
  });

  //削除ボタンを追加
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
    //押された削除ボタンの親要素のdivタグを削除
    deleteFromICList(deleteButton.parentNode);
    // const deleteTarget = deleteButton.parentNode;
    // document.getElementById("imcomplete-list").removeChild(deleteTarget);
  });

  //divタグの子要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加していく
  document.getElementById("imcomplete-list").appendChild(div);

  //未完了リストから指定の要素を削除
  const deleteFromICList = (target) => {
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("imcomplete-list").removeChild(deleteTarget);
  };
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onclickAdd());
