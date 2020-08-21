import { getCourse } from "./model.js";
import { renderCourse } from "./view.js";
import { sendComment } from "./controller.js";

const defaultCourse = "info200";

// states
let curCourse = defaultCourse;

renderCourse(defaultCourse, getCourse(defaultCourse));

document.getElementById("send-comments-btn").addEventListener("click", () => {
  const textarea = document.getElementById("comment-textarea");
  const comment = textarea.value;
  if (comment.length > 0) {
    textarea.value = "";
    sendComment(curCourse, comment);
  }
});
