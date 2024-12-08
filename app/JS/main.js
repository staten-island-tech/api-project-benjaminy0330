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
  const container = document.querySelector(".cardholder");
  amiibos.forEach((amiibo) => {
    container.insertAdjacentHTML(
      "beforeend",
      `<div class = "w-60 rounded-[14px] border-8 font-semibold m-4 bg-slate-500 hover:bg-sky-400 transition text-white hover:text-black">
       <h2 class ="text-2xl pb-4 pt-2"> ${amiibo.name} </h2>
      <img src="${amiibo.image}" alt = "amiibo-image" class ="pb-2">
       <h2> ${amiibo.gameSeries} </h2>
       <h2> Released: ${amiibo.release.jp} </h2>
       </div>
      `
    )
  })
}

fetchData(URL)

async function fetchData2(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    allcard(data.amiibo);
    animalcard(data.amiibo);
    mariocard(data.amiibo);
    pkmncard(data.amiibo);
    zeldacard(data.amiibo);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}


//all

function allcard(amiibos) {
  document.querySelector(".all").addEventListener("click", function () {
    const container = document.querySelector(".cardholder");
    container.innerHTML = "";

    amiibos.forEach((amiibo) => {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="w-60 rounded-[14px] border-8 font-semibold m-4 bg-slate-500 hover:bg-sky-400 transition text-white hover:text-black">
           <h2 class="text-2xl pb-4 pt-2">${amiibo.name}</h2>
           <img src="${amiibo.image}" alt="amiibo-image" class="pb-2">
           <h2>${amiibo.gameSeries}</h2>
           <h2>Released: ${amiibo.release.jp}</h2>
         </div>`
      );
    });
  });
}
//animal crossing
function animalcard(amiibos) {
  document.querySelector(".animal").addEventListener("click", function () {
    const container = document.querySelector(".cardholder");
    container.innerHTML = "";

    const animal = amiibos.filter(amiibo => amiibo.gameSeries.includes("Animal Crossing"));
    console.log(animal);

    animal.forEach((amiibo) => {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="w-60 rounded-[14px] border-8 font-semibold m-4 bg-slate-500 hover:bg-sky-400 transition text-white hover:text-black">
           <h2 class="text-2xl pb-4 pt-2">${amiibo.name}</h2>
           <img src="${amiibo.image}" alt="amiibo-image" class="pb-2">
           <h2>${amiibo.gameSeries}</h2>
           <h2>Released: ${amiibo.release.jp}</h2>
         </div>`
      );
    });
  });
}
//mario
function mariocard(amiibos) {
  document.querySelector(".mario").addEventListener("click", function () {
    const container = document.querySelector(".cardholder");
    container.innerHTML = "";

    const mario = amiibos.filter(amiibo => amiibo.gameSeries.includes("Mario"));
    console.log(mario);

    mario.forEach((amiibo) => {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="w-60 rounded-[14px] border-8 font-semibold m-4 bg-slate-500 hover:bg-sky-400 transition text-white hover:text-black">
           <h2 class="text-2xl pb-4 pt-2">${amiibo.name}</h2>
           <img src="${amiibo.image}" alt="amiibo-image" class="pb-2">
           <h2>${amiibo.gameSeries}</h2>
           <h2>Released: ${amiibo.release.jp}</h2>
         </div>`
      );
    });
  });
}
//pkmn
function pkmncard(amiibos) {
  document.querySelector(".pkmn").addEventListener("click", function () {
    const container = document.querySelector(".cardholder");
    container.innerHTML = "";

    const pkmn = amiibos.filter(amiibo => amiibo.gameSeries.includes("Pokemon"));
    console.log(pkmn);

    pkmn.forEach((amiibo) => {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="w-60 rounded-[14px] border-8 font-semibold m-4 bg-slate-500 hover:bg-sky-400 transition text-white hover:text-black">
           <h2 class="text-2xl pb-4 pt-2">${amiibo.name}</h2>
           <img src="${amiibo.image}" alt="amiibo-image" class="pb-2">
           <h2>${amiibo.gameSeries}</h2>
           <h2>Released: ${amiibo.release.jp}</h2>
         </div>`
      );
    });
  });
}
//zelda
function zeldacard(amiibos) {
  document.querySelector(".zelda").addEventListener("click", function () {
    const container = document.querySelector(".cardholder");
    container.innerHTML = "";

    const zelda = amiibos.filter(amiibo => amiibo.gameSeries.includes("Zelda"));
    console.log(zelda);

    zelda.forEach((amiibo) => {
      container.insertAdjacentHTML(
        "beforeend",
        `<div class="w-60 rounded-[14px] border-8 font-semibold m-4 bg-slate-500 hover:bg-sky-400 transition text-white hover:text-black">
           <h2 class="text-2xl pb-4 pt-2">${amiibo.name}</h2>
           <img src="${amiibo.image}" alt="amiibo-image" class="pb-2">
           <h2>${amiibo.gameSeries}</h2>
           <h2>Released: ${amiibo.release.jp}</h2>
         </div>`
      );
    });
  });
}

fetchData2(URL);
