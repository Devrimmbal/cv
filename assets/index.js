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
  // getData();
  switchThemeButtons();
};

getData = () => {
  fetch("./assets/data.json")
    .then((response) => response.json())
    .then((json) => {
      var ul = document.getElementById("projects");
      for (let i = 0; i < json.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = ` ${json[i].title} `;
        if (json[i].tags != undefined && json[i].tags.length > 0) {
          li.appendChild(createTags(json[i].tags));
          li.className = "project";
        }
        ul.appendChild(li);
      }
    });
};

createTags = (data) => {
  let ul = document.createElement("ul");
  for (let t = 0; t < data.length; t++) {
    let tagLi = document.createElement("li");
    tagLi.innerHTML = ` ${data[t]} `;
    ul.appendChild(tagLi);
  }
  return ul;
};

openPdf = () => {
  window.open("./assets/cv.pdf", "_blank", "fullscreen=yes");
};
