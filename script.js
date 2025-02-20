//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const fontSizeInput = document.getElementById("fontsize");
  const fontColorInput = document.getElementById("fontcolor");
  const form = document.getElementById("settingsForm");

  // Load saved preferences from cookies
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", savedFontSize + "px");
    fontSizeInput.value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    fontColorInput.value = savedFontColor;
  }

  // Save preferences on form submit
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fontSize = fontSizeInput.value;
    const fontColor = fontColorInput.value;

    document.documentElement.style.setProperty("--fontsize", fontSize + "px");
    document.documentElement.style.setProperty("--fontcolor", fontColor);

    setCookie("fontsize", fontSize, 365);
    setCookie("fontcolor", fontColor, 365);
  });

  // Function to set cookies
  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + ";" + expires + "; path=/";
  }

  // Function to get cookie value
  function getCookie(name) {
    let nameEQ = name + "=";
    let cookiesArray = document.cookie.split(";");
    for (let i = 0; i < cookiesArray.length; i++) {
      let c = cookiesArray[i].trim();
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
});
