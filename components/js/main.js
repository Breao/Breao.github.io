const DEBUG = true;


function loadHTML(elem, source) {
    if(DEBUG) {
        console.log("loading HTML");
        console.log("element", elem);
        console.log("source", source);
    }
    fetch(source + '.html')
        .then(response => response.text())
        .then(text => document.getElementById(elem).innerHTML = text);
  }