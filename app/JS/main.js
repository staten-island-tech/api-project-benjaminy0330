import "../CSS/style.css";


const URL = "https://amiiboapi.com/api/amiibo/";

async function fetchData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    createcard(data.amiibo);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
fetchData(URL);
//defeault
function createcard(amiibos){
  const container = document.querySelector(".container");
  amiibos.forEach((amiibo) => {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class = "w-60 rounded-md border-4 border-red-500/100 m-4">
       <h2> ${amiibo.name} </h2>
       <img src="${amiibo.image}" alt = "amiibo-image" class ="w-50 place-items-center">
       <h2> ${amiibo.gameSeries} </h2>
       <h2> Released: ${amiibo.release.jp} </h2>
       </div>
      `
    )
  })
  
}


