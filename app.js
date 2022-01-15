var btn = document.getElementById("gen-btn");
var txtInput = document.getElementById("user-txt");
var txtOutput = document.getElementById("output-txt");
var serverURL = "https://api.funtranslations.com/translate/minion.json?text=";
txtOutput.innerText = "junzzz zin sama be illsou aca! ";

function getTranslatedurl(text) {
  return serverURL + text;
}

function errorHandler(error) {
  console.log("Error Occured", error);
  alert("Somthing Went Wrong With Server!");
}

function click() {
  var txt = txtInput.value;

  fetch(getTranslatedurl(txt))
    .then((response) => response.json())
    .then((json) => {
      var translatedTxt = json.contents.translated;
      txtOutput.innerText = translatedTxt;
    })
    .catch(errorHandler(error));
}

btn.addEventListener("click", click);
