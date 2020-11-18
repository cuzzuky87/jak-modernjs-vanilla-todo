import "./styles.css";

const onClickAdd = () => {
  alert("pushed");
};

document
  .getElementById("add-task")
  .addEventListener("click", () => onClickAdd());
