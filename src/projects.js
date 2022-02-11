const projectNames = [
  [
    {
      name: "Restaurant Page",
      description: "Inspired by Odin",
      website: "https://bekzodturgunoff.github.io/restaurant-page/",
      projectImg: "./images/projectImg/restaurant.png",
      websiteName: "Project link",
    },
    {
      name: "Portfolio",
      description: "My awesome website",
      website: "https://bekzodturgunoff.github.io/portfolio/",
      projectImg: "./images/projectImg/portfolio.png",
      websiteName: "Project link",
    },
  ],
  [
    {
      name: "Calculator",
      description: "Beautifully designed",
      website: "https://bekzodturgunoff.github.io/calculator/",
      projectImg: "./images/projectImg/calculator.png",
      websiteName: "Project link",
    },

    {
      name: "Todoooo",
      description: "Outstanding design",
      website: "https://bekzodturgunoff.github.io/todo/",
      projectImg: "./images/projectImg/todo.png",
      websiteName: "Project link",
    },
  ],
  [
    {
      name: "Tic-tac-toe",
      description: "Very simple game",
      website: "https://bekzodturgunoff.github.io/tic-tac-toe-odin/",
      projectImg: "./images/projectImg/tic-tac-toe.png",
      websiteName: "Project link",
    },
    {
      name: "Piano",
      description: "Created for fun",
      website: "https://bekzodturgunoff.github.io/piano/",
      projectImg: "./images/projectImg/piano.png",
      websiteName: "Project link",
    },
  ],
  [
    {
      name: "Sketch App",
      description: "Odin project DOM",
      website: "https://bekzodturgunoff.github.io/odin-recipes/",
      projectImg: "./images/projectImg/sketch.png",
      websiteName: "Project link",
    },
  ],
];

export function renderProjects(where) {
  // projectName.forEach((pro) => {
  const projectContainer = document.createElement("div");
  for (let i = 0; i < projectNames.length; i++) {
    const group = document.createElement("div");
    group.classList.add("project-group");

    const childOne = createProject(projectNames[i][0]);

    group.append(childOne);

    if (projectNames[i][1]) {
      const childTwo = createProject(projectNames[i][1]);
      group.append(childTwo);
    }

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
