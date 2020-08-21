import { getCourse, getCourseList, changeCourse } from "./model.js";
import { renderCourse } from "./view.js";
import { sendComment } from "./controller.js";

renderCourse();

document.getElementById("send-comments-btn").addEventListener("click", () => {
  const textarea = document.getElementById("comment-textarea");
  const comment = textarea.value;
  if (!!comment && comment.length > 0) {
    textarea.value = "";
    textarea.setCustomValidity("");
    sendComment(comment);
  } else {
    textarea.setCustomValidity("Comment can not be empty!");
    textarea.classList.add("is-invalid");
  }
});

document.getElementById("comment-textarea").addEventListener("input", () => {
  const textarea = document.getElementById("comment-textarea");
  textarea.setCustomValidity("");
  textarea.classList.remove("is-invalid");
});

document.getElementById("search-course-btn").addEventListener("click", () => {
  const form = document.getElementById("course-search");
  const inputField = document.getElementById("input-course");
  const courseName = inputField.value;
  const courseList = getCourseList();
  console.log(courseName, courseList);
  if (courseName.length > 0) {
    if (courseList.includes(courseName)) {
      inputField.setCustomValidity("");
      changeCourse(courseName);
      renderCourse();
    } else {
      console.error(`${courseName} not in course lists`);
      form.classList.add("was-validate");
      inputField.setCustomValidity("This course does not exist");
      inputField.classList.add("is-invalid");
    }
  }
});

document.getElementById("input-course").addEventListener("input", () => {
  const form = document.getElementById("course-search");
  const inputField = document.getElementById("input-course");

  form.classList.remove("was-validate");
  inputField.setCustomValidity("");
  inputField.classList.remove("is-valid");
  inputField.classList.remove("is-invalid");
});
