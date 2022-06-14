const projectNames = [
  [
    {
      name: "Farfill",
      description: "Delivery website",
      website: "https://bekzodturgunoff.github.io/Farfill/",
      projectImg: "./images/projectImg/farfill.png",
      websiteName: "Project link",
    },
    {
      name: "Menu",
      description: "Meals",
      website: "https://stellular-rolypoly-311994.netlify.app/",
      projectImg: "./images/projectImg/menu.png",
      websiteName: "Project link",
    },
    
  ],
  [
    {
      name: "SunnySide",
      description: "Creator website",
      website: "https://sunnyside-react.netlify.app/",
      projectImg: "./images/projectImg/sunnyside.jpg",
      websiteName: "Project link",
    },
    {
      name: "Sotildi",
      description: "E-commerce",
      website: "https://bekzodturgunoff.github.io/sotildi_project/",
      projectImg: "./images/projectImg/sotildi.png",
      websiteName: "Project link",
    },
  ],
  [
    {
      name: "Tours",
      description: "Tour Places React",
      website: "https://elegant-conkies-f280c6.netlify.app/",
      projectImg: "./images/projectImg/tour.png",
      websiteName: "Project link",
    },
    {
      name: "Login",
      description: "Questions React",
      website: "https://monumental-puffpuff-3d5225.netlify.app/",
      projectImg: "./images/projectImg/login.png",
      websiteName: "Project link",
    },
  ],

  [
    {
      name: "Quizzical",
      description: "Interesting questions",
      website: "https://quizical-react.netlify.app/",
      projectImg: "./images/projectImg/project.jpg",
      websiteName: "Project link",
    },
    {
      name: "LoopStudio",
      description: "VR website",
      website: "https://loopstudio-react.netlify.app/",
      projectImg: "./images/projectImg/loopstudio.jpg",
      websiteName: "Project link",
    },
  ],
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
    {
      name: "Check out my GitHub",
      description: "",
      website: "https://github.com/bekzodturgunoff",
      projectImg: "./images/projectImg/project.jpg",
      websiteName: "Project link",
    },
  ],
];

export function renderProjects(where) {
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
