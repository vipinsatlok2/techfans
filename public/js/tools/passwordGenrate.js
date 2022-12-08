const length = document.getElementById("length");
const password = document.getElementById("password");
const copyButton = document.getElementById("copyButton");
const genrateButton = document.getElementById("genrateButton");

let value = "sats saheb";
// random password genrator
function generateRandomPassword(e) {
  e.preventDefault();

  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let randPassword = "";
  for (let i = 0; i < Number(length.value); i++) {
    randPassword += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  // setting value
  password.value = randPassword;
}

async function copyPassword(e) {
  e.preventDefault();
  copyButton.innerText = "Copied";
  await navigator.clipboard.writeText(password.value);
  setTimeout(() => {
    copyButton.innerText = "Copy";
  }, 1000);
}

genrateButton.onclick = generateRandomPassword;
copyButton.onclick = copyPassword;
