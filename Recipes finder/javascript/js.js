    const input = document.getElementById('inputs')
    const btn = document.getElementById('button')
    const container = document.getElementById('container')
    const div = document.getElementById('borderDiv');

    async function getRecipes(){  
        
        clearBox();
        let ingredients = input.value
        const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=ba74923736974898a4dd01f03046d4dc`
        const res = await fetch(url)
        const json = await res.json()
        const Rimg =document.getElementById('img')

        for (let i = 0; i < json.length; i++) {
            let recipe = json[i]
            let title = document.createElement('p')
            let image = document.createElement('img')
            let brk = document.createElement('br')
            title.innerText = recipe.title
            image.src = recipe.image
            addBorder(div);
            div.appendChild(image);
            div.appendChild(title); 
            container.appendChild(div);
          }//for loop
          
    } //getRecipes's method
      //html card tutorial

        function clearBox(){
            container.innerHTML = "";
        }// clear cont. method

        function addBorder(div){
          console.log('hi')
          div.style.border = "2px solid red";
        }// add border method

        

    btn.addEventListener('click', getRecipes)



//----------------- Night Mode -----------------

const button = document.getElementById("mode");
const body = document.getElementById("main");
const navBar = document.getElementById("nav");
const navText = document.getElementById("text");
const foodBTN = document.getElementById("foodBtn");
const con = document.getElementById('container')
let mode = "light";

function switchMode() {
  console.log("hi");
  if (mode === "light") {
    mode = "night";
    navBar.style.background = "#5C5470";
    body.style.background = "#B9B4C7";
    navText.style.color = "whitesmoke";
    con.style.background = "rgba(88, 84, 84, 0.411)";
  }
  else {
    mode = "light";
    nav.style.background = "darkseagreen";
    body.style.background = "whitesmoke";
    navText.style.color = "black";
    con.style.background ="rgba(143, 188, 143, 0.411)";
  }
}
button.addEventListener("click", switchMode);



// ----------- random -----------

const bttn = document.getElementById("random");

async function random(){
  console.log('dj')
  const randomLink = `https://api.spoonacular.com/recipes/random?=&apiKey=ba74923736974898a4dd01f03046d4dc`
  const res = await fetch(randomLink)
  const json = await res.json()
  let recipe = json[1]
  let title = document.createElement('p')
  let image = document.createElement('img')

  title.innerText = recipe.title
  image.src = recipe.image
  container.appendChild(title);
  container.appendChild(image); 
}

bttn.addEventListener("click", random);
