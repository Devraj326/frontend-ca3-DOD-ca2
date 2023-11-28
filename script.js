let random_img = document.getElementById("random-img");
let popularMeals = document.getElementById("popular-meals");
let searchButton = document.getElementById("search-button");
let searchInput = document.getElementById("search-input");
arr=[];

const ingredientsModal = document.getElementById("ingredientsModal");
const ingredientsContainer = document.getElementById("ingredients-container");
const closeModalButton = document.querySelector(".close");

fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const randomMealImageElement = document.createElement("img");
    randomMealImageElement.setAttribute("src", data.meals[0].strMealThumb);
    random_img.appendChild(randomMealImageElement);

    document.getElementById("foodtext").innerText = data.meals[0].strMeal;

    randomMealImageElement.addEventListener("click", () => {
      ingredientsModal.style.display = "block";

      ingredientsContainer.innerHTML = ""; 

      for (let i = 1; i <= 30; i++) {
        const ingredientItem = `strIngredient${i}`;
        const ingredient = data.meals[0][ingredientItem];

        if (ingredient) {
          const ingredientElement = document.createElement("p");
          ingredientElement.innerText = ingredient;
          ingredientsContainer.appendChild(ingredientElement);
        }
      }
    });

    closeModalButton.addEventListener("click", () => {
      ingredientsModal.style.display = "none";
    });
  });

function appendMeals(meals) {
  meals.forEach((meal) => {
    const mealContainer = document.createElement("div"  );
  })}


 searchButton.addEventListener("click", ()=>{

    getdata()
 })

function getdata(){
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchInput.value}`).then((res)=>{
        console.log(res.data)

        const getmeals = document.getElementById("popular-meals")
        getmeals.innerHTML=''
        for(let i = 0; i < res.data.meals.length; i++){
            const meal = res.data.meals[i].strMeal
            const img = res.data.meals[i].strMealThumb
            let printmeal =`
            <div id='meal'>
            <img src="${img}">
            <h1>${meal}</h1>
            </div>
            `
            getmeals.innerHTML+=printmeal
        }
        
    })
}
getdata()
