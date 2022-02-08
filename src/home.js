export function renderHome(where) {
  let homeQuot = document.createElement("div");
  let homeSentence = document.createElement("h2");
  homeQuot.classList.add("home-quot");
  homeSentence.textContent = `Discipline will take you were motivation won't`;
  homeQuot.append(homeSentence);
  where.append(homeQuot);
  /////////////////////////////////////////
  let aboutArray = [
    `Hey, thank you for visiting the site. My name is Bekzod, I have been learning web programming since 2021. It was hard for me to learn web programming, but I never stopped. Then I fell in love with web programming. Even now I struggle, but I don’t stop learning. By the way, this site is made entirely of JavaScript programming language. If you think I deserve a job, give me a call`,
  ];

  let aboutDiv = document.createElement("div");
  let homeAbout = document.createElement("h1");
  let aboutParagraph = document.createElement("p");
  homeAbout.textContent = "About";
  aboutDiv.classList.add("about-div");
  aboutParagraph.textContent = aboutArray;
  aboutDiv.append(homeAbout, aboutParagraph);
  where.append(aboutDiv);
}
