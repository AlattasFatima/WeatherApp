    const input = document.getElementById('inputs')
    const btn = document.getElementById('Btn')
    const container = document.getElementById('container')

    async function getRecipes(){  
        
        clearBox();
        let ingredients = input.value
        const url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&apiKey=ba74923736974898a4dd01f03046d4dc`
        const res = await fetch(url)
        const json = await res.json()

        for (let i = 0; i < json.length; i++) {
            let recipe = json[i]
            let title = document.createElement('p')
            let image = document.createElement('img')
            title.innerText = recipe.title
            container.appendChild(title);
            container.appendChild(image);
          }//for loop
          container
    }

        function clearBox(){
            container.innerHTML = "";
        }

    btn.addEventListener('click', getRecipes)