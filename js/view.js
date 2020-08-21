function renderRateButtons() {
  const container = document.createElement("div");
  container.className =
    "rate-btn-container button-group d-flex flex-row-reverse";

  const btnDown = document.createElement("button");
  btnDown.className = "class-rate-btn btn btn-light p-0";
  btnDown.setAttribute("type", "button");
  const iconDown = document.createElement("i");
  iconDown.className = "fas fa-thumbs-down text-dark";
  btnDown.appendChild(iconDown);

  const btnUp = document.createElement("button");
  btnUp.className = "class-rate-btn btn btn-light p-0 mr-2";
  btnUp.setAttribute("type", "button");
  const iconUp = document.createElement("i");
  iconUp.className = "fas fa-thumbs-down text-dark";
  btnUp.appendChild(iconUp);

  const hints = document.createElement("p");
  hints.className = "button hints mb-0 mr-2";
  hints.textContent = "Do you find this description accurate?";

  container.appendChild(btnDown);
  container.appendChild(btnUp);
  container.appendChild(hints);

  return container;
}

function renderProfessor(professor) {
  const item = document.createElement("div");
  item.classList.add(
    "class-info-item",
    "border",
    "border-primary",
    "rounded",
    "d-flex",
    "mb-3",
    "w-100"
  );
  const photo = document.createElement("img");
  photo.classList.add("professor-photo");
  photo.src = professor.img;
  photo.alt = `${professor.name}'s picture`;

  const infoContainer = document.createElement("div");
  infoContainer.classList.add("w-100", "m-3", "pho");
  const name = document.createElement("p");
  name.classList.add("professor-name", "mb-0", "h3");
  name.textContent = professor.name;
  const desc = document.createElement("p");
  desc.className = "professor-desc mb-0";
  desc.textContent = professor.desc;

  infoContainer.appendChild(name);
  infoContainer.appendChild(desc);

  const footer = document.createElement("div");
  footer.className = "professor-footer d-flex justify-content-between";
  const rating = document.createElement("p");
  rating.className = "professor-rating text-primary mb-0";
  rating.textContent = professor.rating;
  footer.appendChild(rating);
  footer.appendChild(renderRateButtons());

  item.appendChild(photo);
  item.appendChild(infoContainer);
  item.appendChild(footer);

  return item;
}

export function renderProfessors(professors) {
  const container = document.getElementById("professors");
  container.innerHTML = "";
  professors.forEach((prof) => {
    container.appendChild(renderProfessor(prof));
  });
}

export function renderGPA(gpa) {
  const container = document.getElementById("gpa");
  container.textContent = gpa;
}

export function renderTimeLoad(load) {
  const container = document.getElementById("time-load");
  container.textContent = load;
}

export function renderReadingLoad(load) {
  const container = document.getElementById("reading-load");
  container.textContent = load;
}

export function renderPracticeLoad(load) {
  const container = document.getElementById("practice-load");
  container.textContent = load;
}
