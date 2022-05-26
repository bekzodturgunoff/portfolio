export function renderContacts(where) {
  let contactDiv = document.createElement("div");
  let personPicture = document.createElement("img");
  let contactMe = document.createElement("h2");
  let emailMe = document.createElement("p");
  let phoneMe = document.createElement("p");
  personPicture.src = "./images/picture-me.jpg";
  contactMe.textContent = "Contact Me";
  emailMe.textContent = "Email: bekzodturgunoff@gmail.com";
  phoneMe.textContent = "Phone: (93) 195-55-51 / (91) 051-11-10";
  personPicture.classList.add("person-img");
  contactDiv.classList.add("contact-div");
  contactDiv.append(personPicture, contactMe, emailMe, phoneMe);
  where.append(contactDiv);
}
