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
  div.className = "list-row";

  //liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  // divタグの子要素に各要素を設定
  div.appendChild(li);

  //未完了のリストに追加
  document.getElementById("incomplete-task-list").appendChild(div);
};

document
  .getElementById("add-task")
  .addEventListener("click", () => onClickAdd());
