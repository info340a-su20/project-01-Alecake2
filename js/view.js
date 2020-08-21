import { thumbUp, thumbDown } from "./controller.js";
import { getCurCourse, getCourse } from "./model.js";

function renderTitle(title) {
  document.getElementById("class-title").textContent = title;
}

function renderRateButtons(professor) {
  const container = document.createElement("div");
  container.className =
    "rate-btn-container button-group d-flex flex-row-reverse";

  const btnDown = document.createElement("button");
  btnDown.className = "class-rate-btn btn p-0";
  btnDown.classList.add(
    professor.thumbDown ? "btn-primary" : "btn-light",
    professor.thumbDown ? "text-white" : "text-dark"
  );
  btnDown.setAttribute("type", "button");
  btnDown.addEventListener("click", () => {
    thumbDown(professor.name);
  });
  const iconDown = document.createElement("i");
  iconDown.className = "fas fa-thumbs-down";
  btnDown.appendChild(iconDown);

  const btnUp = document.createElement("button");
  btnUp.className = "class-rate-btn btn p-0 mr-2";
  btnUp.classList.add(
    professor.thumbUp ? "btn-primary" : "btn-light",
    professor.thumbUp ? "text-white" : "text-dark"
  );
  btnUp.setAttribute("type", "button");
  btnUp.addEventListener("click", () => {
    thumbUp(professor.name);
  });
  const iconUp = document.createElement("i");
  iconUp.className = "fas fa-thumbs-up";
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
  infoContainer.classList.add("w-100", "m-3", "position-relative");
  const name = document.createElement("p");
  name.classList.add("professor-name", "mb-0", "h3");
  name.textContent = professor.name;
  const desc = document.createElement("p");
  desc.className = "professor-desc mb-0";
  desc.textContent = professor.desc;

  const footer = document.createElement("div");
  footer.className =
    "professor-footer d-flex justify-content-between align-items-end";
  const rating = document.createElement("p");
  rating.className = "professor-rating text-primary mb-0";
  rating.textContent = parseFloat(professor.accuracy).toFixed(1) + "/5.0";
  footer.appendChild(rating);
  footer.appendChild(renderRateButtons(professor));

  infoContainer.appendChild(name);
  infoContainer.appendChild(desc);
  infoContainer.appendChild(footer);

  item.appendChild(photo);
  item.appendChild(infoContainer);

  return item;
}

export function renderProfessors(professors) {
  const container = document.getElementById("professors");
  container.innerHTML = "";
  Object.values(professors).forEach((prof) => {
    container.appendChild(renderProfessor(prof));
  });
}

export function renderGPA(gpa) {
  const container = document.getElementById("gpa");
  container.textContent = `Mean GPA: ${gpa}`;
}

export function renderTimeLoad(load) {
  const container = document.getElementById("time-load");
  container.textContent = `Average Time / wk: ${load}`;
}

export function renderReadingLoad(load) {
  const container = document.getElementById("reading-load");
  container.textContent = `Weekly Reading Load: ${load}`;
}

export function renderPracticeLoad(load) {
  const container = document.getElementById("practice-load");
  container.textContent = `Practice Problem Load: ${load}`;
}

export function renderComment(comment) {
  const container = document.createElement("div");
  container.className = "comment px-3";

  const authorName = document.createElement("p");
  authorName.className = "author font-weight-bold";
  authorName.textContent = comment.author;
  const commentBody = document.createElement("p");
  commentBody.className = "comment-body";
  commentBody.textContent = comment.body;

  container.appendChild(authorName);
  container.appendChild(commentBody);

  return container;
}

export function renderComments(comments) {
  const container = document.getElementById("comments-inner-container");
  container.innerHTML = "";
  comments.forEach((comment, i) => {
    container.appendChild(renderComment(comment));
    if (i < comments.length - 1) {
      container.appendChild(document.createElement("hr"));
    }
  });
}

export function renderCourse() {
  const courseData = getCourse();
  renderTitle(courseData.title);
  renderProfessors(courseData.professors);
  renderGPA(courseData.gpa);
  renderTimeLoad(courseData.timeConsumed);
  renderReadingLoad(courseData.readingLoad);
  renderPracticeLoad(courseData.practiceProblemLoad);
  renderComments(courseData.comments);
}
