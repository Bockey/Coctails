logoLink();

const detailContainer = document.querySelector(".detailContainer");

const breadCrumbs = document.querySelector(".breadCrumbs");

const bcSection = document.querySelector(".breadCrumbs section");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

let id = params.get("i");

console.log(id);

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;

async function getApi() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    const data = json.drinks;
    console.log(data);
    document.title = `${data[0].strDrink} Coctail Recipe`;
    bcSection.innerHTML = `${data[0].strDrink}`;
    detailContainer.innerHTML = `<div class="coctailDetails">
                                    <div class="cdText">
                                        <h1 class="cdName">${data[0].strDrink}</h1>
                                        <p class="cdInstructions">${data[0].strInstructions}</p>
                                    </div>
                                    <div class="imageDiv">
                                        <img class="cdImage" src="${data[0].strDrinkThumb}" alt="This coctail picture is taken from ${data[0].strImageAttribution}">
                                    </div>
                                </div>`;
  } catch (error) {
    breadCrumbs.innerHTML = "";
    detailContainer.innerHTML = `<div class="catchError">
                                    <h2>Something went wrong.</h2>
                                    <p>${error}</p>
                                </div>`;
  }
}
getApi();
