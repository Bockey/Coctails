const container = document.querySelector(".container");
const name = document.querySelector(".name");
const type = document.querySelector(".type");
const image = document.querySelector(".coctailImage");
logoLink();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m";

async function getApi() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    let data = json.drinks;
    container.innerHTML = "";
    for (let i = 0; i < 24; i++) {
      let id = data[i].idDrink;
      //   console.log(id);
      container.innerHTML += ` <a href="details.html?i=${id}" class="coctail">
                            <div class="textInformation">
                                <h2 class="name">${data[i].strDrink}</h2>
                                <p class="type">Type: ${data[i].strAlcoholic}</p>
                            </div>
                            <div>
                                <img class="coctailImage" src="${data[i].strDrinkThumb}" alt="image of ${data[i].strDrink} coctail ">
                            </div>
                            </a>`;
    }
  } catch (error) {
    container.innerHTML = `<div class="catchError">
                             <h2>Something went wrong.</h2>
                             <p>${error}</p>
                           </div>`;
  }
}
getApi();
