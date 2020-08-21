import { getCourse, getCourseList } from "./model.js";
import { renderCourse } from "./view.js";
import { sendComment } from "./controller.js";

const defaultCourse = "info200";

// states
let curCourse = defaultCourse;

renderCourse(defaultCourse, getCourse(defaultCourse));

document.getElementById("send-comments-btn").addEventListener("click", () => {
  const textarea = document.getElementById("comment-textarea");
  const comment = textarea.value;
  if (!!comment && comment.length > 0) {
    textarea.value = "";
    sendComment(curCourse, comment);
  }
});

document.getElementById("search-course-btn").addEventListener("click", () => {
  const dept = document.getElementById("input-dept").value;
  const num = document.getElementById("input-num").value;
  const courseList = getCourseList();
  if (dept.length > 0 && num.length > 0) {
    const courseName = `${dept}${num}`;
    if (courseName in courseList) {
      curCourse = courseName;
      renderCourse(curCourse, getCourse(curCourse));
    }
  }
});
