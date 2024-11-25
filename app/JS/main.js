import "../CSS/style.css";




const URL = "https://pokeapi.co/api/v2/berry/";

async function getData(URL){
  try {
    const response = await fetch(URL);
    const data = await response.json();
    document.getElementById("api-response").textContent = data.content;
  } catch (error) {
    console.log(error);
  }
}
getData(URL);








/*async function getData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/berry/");

    if (response.status !== 200) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    const data = await response.json();

    console.log(data);

    data.items.forEach((berry) => {
      console.log(berry.name);
      createcards(berry.url, berry.name);
    });
  } catch (error) {
    console.error("Error fetching data:");
    alert("Unable to find berry");
  }
}

getData();*/