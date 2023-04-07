import "./style.css";

const editor = document.querySelector<HTMLDivElement>(".editor")!;

editor.setAttribute("contenteditable", "true");

editor.addEventListener("input", () => {
  const code: string = editor.innerText;
});
