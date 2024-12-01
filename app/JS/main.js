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

//defeault
function createcard(amiibos){
  const container = document.querySelector(".container");
  amiibos.forEach((amiibo) => {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class = "w-60 rounded-[14px] border-4 border-white m-4 bg-slate-300">
       <h2> ${amiibo.name} </h2>
      <img src="${amiibo.image}" alt = "amiibo-image" class ="w-41">
       <h2> ${amiibo.gameSeries} </h2>
       <h2> Released: ${amiibo.release.jp} </h2>
       </div>
      `
    )
  })
  
}

fetchData(URL);
/*const searchURL = "https://amiiboapi.com/api/amiibo/";

*/ 
