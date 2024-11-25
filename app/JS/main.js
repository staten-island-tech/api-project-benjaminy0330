import "../CSS/style.css";


async function getData() {
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
    console.error("Error fetching data:", error);
    alert("Unable to find berry");
  }
}

getData();