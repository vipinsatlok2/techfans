const textarea = document.getElementById("textarea");
const input = document.getElementById("input");
const copyButton = document.getElementById("copyButton");
const countButton = document.getElementById("countButton");

function countLetter(e) {
  e.preventDefault();
  const length = textarea.value.length;
  input.value = length;
}

async function copyPassword(e) {
  e.preventDefault();
  copyButton.innerText = "Copied";
  await navigator.clipboard.writeText(input.value);
  setTimeout(() => {
    copyButton.innerText = "Copy";
  }, 1000);
}

countButton.onclick = countLetter;
copyButton.onclick = copyPassword;
