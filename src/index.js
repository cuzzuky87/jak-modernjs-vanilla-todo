import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、クリアを行う。
  const inputText = document.getElementById("add-task-text").value;
  document.getElementById("add-task-text").value = "";

  if (inputText === "") {
    return;
  }

  createIncompleteTask(inputText);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-task-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteTask = (taskText) => {
  //div生成
  const div = document.createElement("div");
  div.id = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = taskText;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //対象取得
    const doneTarget = completeButton.parentNode;

    //未完了から削除
    deleteFromIncompleteList(doneTarget);
    //todo内容テキスト取得
    const text = doneTarget.firstElementChild.innerText;

    //div以下を初期化
    doneTarget.textContent = null;

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;

    //戻すボタン
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const backTarget = backButton.parentNode;
      document.getElementById("done-task-list").removeChild(backTarget);

      //タスク内容取得
      const text = backTarget.firstElementChild.innerText;
      createIncompleteTask(text);
    });

    //タグ生成
    doneTarget.appendChild(li);
    doneTarget.appendChild(backButton);

    //完了に追加
    document.getElementById("done-task-list").appendChild(doneTarget);
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  // divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加
  document.getElementById("incomplete-task-list").appendChild(div);
};

document
  .getElementById("add-task")
  .addEventListener("click", () => onClickAdd());
