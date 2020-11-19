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
  console.log(div);
  console.log(inputText);
};

document
  .getElementById("add-task")
  .addEventListener("click", () => onClickAdd());
