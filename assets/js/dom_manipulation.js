/*dealing with input code height*/
document
  .getElementById("code-area")
  .addEventListener("input", autoResize, false);

function autoResize() {
  this.style.height = "auto";
  this.style.height = this.scrollHeight + "px";
}

/*dealing with tab in the input text field*/
document.getElementById("code-area").addEventListener("keydown", function (e) {
  if (e.key == "Tab") {
    e.preventDefault();
    var start = this.selectionStart;
    var end = this.selectionEnd;
    // set textarea value to: text before caret + tab + text after caret
    this.value =
      this.value.substring(0, start) + "\t" + this.value.substring(end);
    // put caret at right position again
    this.selectionStart = this.selectionEnd = start + 1;
  }
});

function addToOutput(s) {
  document.getElementById("terminal-area").innerText =
    document.getElementById("terminal-area").value !== undefined
      ? `${document.getElementById("terminal-area").value}\n>\t${s}\n`
      : `>\t${s}\n`;
  console.log(s);
}
