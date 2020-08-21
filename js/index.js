import { getCourse, getCourseList, changeCourse } from "./model.js";
import { renderCourse } from "./view.js";
import { sendComment } from "./controller.js";

renderCourse();

document.getElementById("send-comments-btn").addEventListener("click", () => {
  const textarea = document.getElementById("comment-textarea");
  const comment = textarea.value;
  if (!!comment && comment.length > 0) {
    textarea.value = "";
    sendComment(comment);
  }
});

document.getElementById("search-course-btn").addEventListener("click", () => {
  const dept = document.getElementById("input-dept").value;
  const num = document.getElementById("input-num").value;
  const courseList = getCourseList();
  if (dept.length > 0 && num.length > 0) {
    const courseName = `${dept}${num}`;
    if (courseName in courseList) {
      changeCourse(courseName);
      renderCourse(getCourse(curCourse));
    }
  }
});
