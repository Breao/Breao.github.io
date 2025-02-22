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

const getJSON = async url => {
    const response = await fetch(url);
    if(!response.ok) // check if response worked (no 404 errors etc...)
      throw new Error(response.statusText);
  
    const data = response.json(); // get JSON from the response
    return data; // returns a promise, which resolves to this data value
  }