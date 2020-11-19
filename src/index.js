import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、クリアを行う。
  const inputText = document.getElementById("add-task-text").value;
  document.getElementById("add-task-text").value = "";

  if (inputText === "") {
    return;
  }

  //div生成
  const div = document.createElement("div");
  div.id = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("done");
  });

  //button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("delete");
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
