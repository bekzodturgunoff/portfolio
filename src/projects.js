const projects  = [
    {
        name : 'info',
        website:"asdasdasdas"
    }
]

export function renderProjects(where){
    projects.forEach((pro)=>{
        let projectsContainer = document.createElement("div")
        let links = document.createElement("a")
        let pictures = document.createElement("img")
        projectsContainer.classList.add("project-cont")
        pictures.classList.add("project-img")
        
        
    })

}


// meals.forEach((meal) => {
//     let container = document.createElement("div");
//     let productImage = document.createElement("img");
//     let right = document.createElement("div");
//     let title = document.createElement("h2");
//     let description = document.createElement("p");
//     let price = document.createElement("span");
//     container.classList.add("container-meal");
//     right.classList.add("list-meal");
//     container.classList.add("div-meal");
//     productImage.src = meal.imgSrc;
//     title.textContent = meal.name;
//     description.textContent = meal.description;
//     price.textContent = meal.price;
//     right.append(title, description, price);
//     container.append(productImage, right);
//     where.append(container);
//   });