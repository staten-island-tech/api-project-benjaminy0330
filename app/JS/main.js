import "../CSS/style.css";

const DOMSelectors = {

}


const URL = "https://pokeapi.co/api/v2/berry/?offset=20&limit=64"; //https://opentdb.com/api.php?amount=50

fetch(URL).then((response) => response.json());
async function fetchData(URL){
try {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
  return data;
} catch (error) {
  console.error(error);
}
}
fetchData(URL);






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