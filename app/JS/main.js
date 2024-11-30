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

function createcard(amiibos){
  const container = document.querySelector(".container");
  amiibos.forEach((amiibo) => {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class = "flex-initial">
      <div> <h1> ${amiibo.name} </h1> </div>
       <img src="${amiibo.image}" alt = "amiibo-image" class ="image">
       </div>
      `
    )
  })
  
}