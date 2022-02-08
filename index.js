import { renderHome } from "./src/home.js";
import { renderProjects } from "./src/projects.js";
import { renderContacts } from "./src/contact.js";

const root = document.getElementById("root");
const links = document.querySelectorAll(".nav-bar");

let routes = {
  "/": renderHome,
  "/projects": renderProjects,
  "/contact": renderContacts,
};

links.forEach((link) => link.addEventListener("click", changeRoute));

function changeRoute(e) {
  e.preventDefault();
  root.innerHTML = "";
  const path = e.target.pathname;
  const render = routes[path];
  if (render) render(root);
  return false;
}
renderHome(root);
