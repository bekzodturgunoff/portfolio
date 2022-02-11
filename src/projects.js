const projectNames = [
  {
    name: "Calculator",
    description: "The Odin Projects ",
    website: "https://bekzodturgunoff.github.io/calculator/",
    projectImg: "./images/calculator.png",
    websiteName: "Project link",
  },
  {
    name: "Restaurant Page",
    description: "Hola welcome to projects",
    website: "https://bekzodturgunoff.github.io/restaurant-page/",
    projectImg: "./images/restaurant.png",
    websiteName: "Project link",
  },
  {
    name: "Project",
    description: "Hola welcome to projects",
    website: "https://www.google.com",
    projectImg: "./images/project.jpg",
    websiteName: "Project link",
  },
  {
    name: "Project",
    description: "Hola welcome to projects",
    website: "https://www.google.com",
    projectImg: "./images/project.jpg",
    websiteName: "Project link",
  },
  {
    name: "Project",
    description: "Hola welcome to projects",
    website: "https://www.google.com",
    projectImg: "./images/project.jpg",
    websiteName: "Project link",
  },
  {
    name: "Project",
    description: "Hola welcome to projects",
    website: "https://www.google.com",
    projectImg: "./images/project.jpg",
    websiteName: "Project link",
  },
  {
    name: "Project",
    description: "Hola welcome to projects",
    website: "https://www.google.com",
    projectImg: "./images/project.jpg",
    websiteName: "Project link",
  },
];

export function renderProjects(where) {
  // projectName.forEach((pro) => {
  const projectContainer = document.createElement("div");
  for (let i = 0; i < projectNames.length / 2; i++) {
    const group = document.createElement("div");
    group.classList.add("project-group");
    const childOne = createProject(projectNames[i]);
    const childTwo = createProject(projectNames[i + 1]);

    group.append(childOne, childTwo);
    projectContainer.append(group);
  }
  projectContainer.classList.add("project-container");
  where.append(projectContainer);
}

function createProject(pro) {
  const project = document.createElement("div");
  const projectNames = document.createElement("h2");
  const description = document.createElement("p");
  const link = document.createElement("a");
  const projectImg = document.createElement("img");
  project.classList.add("project-items");

  projectNames.textContent = pro.name;
  description.textContent = pro.description;
  link.setAttribute("href", pro.website);
  link.setAttribute("data-text", "Click here");
  link.textContent = pro.websiteName;
  projectImg.src = pro.projectImg;
  project.append(projectImg, projectNames, description, link);
  return project;
}
