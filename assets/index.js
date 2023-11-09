toggleDarkMode = () => {
  document.body.classList.toggle("dark");
  switchThemeButtons();
};

switchThemeButtons = () => {
  let dark = document.getElementById("dark");
  let light = document.getElementById("light");

  let darkDocument = document.getElementById("document-dark");
  let lightDocument = document.getElementById("document");

  if (document.body.className == "dark") {
    dark.style.display = "none";
    light.style.display = "block";
    darkDocument.style.display = "none";
    lightDocument.style.display = "block";
  } else {
    dark.style.display = "block";
    light.style.display = "none";
    darkDocument.style.display = "block";
    lightDocument.style.display = "none";
  }
};

window.onload = () => {
  switchThemeButtons();
};

openPdf = () => {
  window.open("./assets/cv.pdf", "_blank", "fullscreen=yes");
};
