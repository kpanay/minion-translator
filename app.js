var btntranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");

var textOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/hodor.json"


function getTransalationURL(input) {
    return serverURL + "?" + "text=" + input;
}

function erroHandler(error) {
    console.log(error.code, error.message)
}
const eventHandler = () => {
    // console.log("clicked")
    // console.log("input from box", textInput.value)
    var txtInput = textInput.value
    fetch(getTransalationURL(txtInput))
        .then(response => response.json())
        .then(json => {
            textOutput.innerHTML = json.contents.translated;
        }).catch(erroHandler)

}
btntranslate.addEventListener("click", eventHandler);

