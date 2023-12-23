function generate() {
  let dictionary = "";
  if (document.getElementById("azCheckbox").checked) {
    dictionary += "qwertyuiopasdfghjklzxcvbnm";
  }
  if (document.getElementById("AZCheckbox").checked) {
    dictionary += "QWERTYUIOPASDFGHJKLZXCVBNM";
  }
  if (document.getElementById("09Checkbox").checked) {
    dictionary += "0123456789";
  }
  if (document.getElementById("specialCharsCheckbox").checked) {
    dictionary += "!@#$%^&*()_+-={}[]|:;'<>,.?";
  }

  const length = document.querySelector('input[type="range"]').value;

  if (length < 1 || dictionary.length === 0) {
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const position = Math.floor(Math.random() * dictionary.length);
    password += dictionary[position];
  }

  document.querySelector('input[type="text"]').value = password;
}

[
  ...document.querySelectorAll('input[type="checkbox"], button.generate'),
].forEach((element) => {
  element.addEventListener("click", generate);
});

document.querySelector('input[type="range"]').addEventListener("input", (e) => {
  document.querySelector("div.range .spanTwo").innerHTML = e.target.value;
  generate();
});

document.querySelector("div.password .copy").addEventListener("click", () => {
  const pass = document.querySelector('input[type="text"]').value;
  navigator.clipboard.writeText(pass).then(() => {
    document.querySelector("div.password .copy").innerHTML = "copied!";
    setTimeout(() => {
      document.querySelector("div.password .copy").innerHTML = "copy";
    }, 1000);
  });
});

generate();
