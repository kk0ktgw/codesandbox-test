import "./styles.css";

const onclickAdd = () => {
  //テキストボックスの値を取得し初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createICList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromICList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};
//未完了リストに追加する関数
const createICList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //li生成
  const li = document.createElement("li");
  li.innerText = text;

  //完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // alert("完了");
    deleteFromICList(completeButton.parentNode);
    //   const deleteTarget = completeButton.parentNode;
    //   document.getElementById("imcomplete-list").removeChild(deleteTarget);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //divの1番目子要素のテキスト要素を取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;

    //戻すボタン生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親要素のdivタグを削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createICList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加する
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //削除ボタンを追加
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // alert("削除");
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
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onclickAdd());
