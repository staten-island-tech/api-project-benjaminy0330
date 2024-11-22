import "../css/style.css"

const URL = {"url": "https://random-d.uk/api/images/51.jpg", "message": "Powered by random-d.uk"}

async function getData(URL){
    const response = await fetch(URL);
    console.log(response);
}
getData();