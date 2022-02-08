const projectName = [
  {
    name: "Project",
    description: "Hola welcome to projects",
    website: "https://www.google.com",
    projectImg: "./images/project.jpg",
    websiteName: "Hello world",
  },
  {
    name: "Project",
    description: "Hola welcome to projects",
    website: "https://www.google.com",
    projectImg: "./images/project.jpg",
    websiteName: "Hello world",
  },
  {
    name: "Project",
    description: "Hola welcome to projects",
    website: "https://www.google.com",
    projectImg: "./images/project.jpg",
    websiteName: "Hello world",
  },
  {
    name: "Project",
    description: "Hola welcome to projects",
    website: "https://www.google.com",
    projectImg: "./images/project.jpg",
    websiteName: "Hello world",
  },
  {
    name: "Project",
    description: "Hola welcome to projects",
    website: "https://www.google.com",
    projectImg: "./images/project.jpg",
    websiteName: "Hello world",
  },
  {
    name: "Project",
    description: "Hola welcome to projects",
    website: "https://www.google.com",
    projectImg: "./images/project.jpg",
    websiteName: "Hello world",
  },
  {
    name: "Project",
    description: "Hola welcome to projects",
    website: "https://www.google.com",
    projectImg: "./images/project.jpg",
    websiteName: "Hello world",
  },
];

export function renderProjects(where) {
  // projectName.forEach((pro) => {
  const projectContainer = document.createElement("div");
  for (let i = 0; i < projectName.length / 2; i++) {
    const group = document.createElement("div");
    group.classList.add("project-group");
    const childOne = createProject(projectName[i]);
    const childTwo = createProject(projectName[i + 1]);

    group.append(childOne, childTwo);
    projectContainer.append(group);
  }
  projectContainer.classList.add("project-container");
  where.append(projectContainer);
}

function createProject(pro) {
  const project = document.createElement("div");
  const projectName = document.createElement("h2");
  const description = document.createElement("p");
  const links = document.createElement("a");
  const projectImg = document.createElement("img");
  project.classList.add("project-items");
  projectName.textContent = pro.name;
  description.textContent = pro.description;
  links.setAttribute("href", pro.website);
  links.textContent = pro.websiteName;
  projectImg.src = pro.projectImg;
  project.append(projectImg, projectName, description, links);
  return project;
}
