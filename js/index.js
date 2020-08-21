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
    textarea.setCustomValidity('');
  } else {
    textarea.setCustomValidity('Comment can not be empty!');
    let feedback = document.querySelector('#commentFeedback');
    feedback.textContent = 'Comment can not be empty!';
  }
});

document.getElementById("search-course-btn").addEventListener("click", () => {
  const dept = document.getElementById("input-dept").value;
  const num = document.getElementById("input-num").value;
  const courseList = getCourseList();
  if (dept.length > 0 && num.length > 0) {
    const courseName = `${dept}${num}`;
    console.log(courseName, courseList);

    if (courseList.includes(courseName)) {
      changeCourse(courseName);
      renderCourse();
    } else {
      console.error(`${courseName} not in course lists`);
    }
  }
});

const dept = document.getElementById("input-dept").value;
const num = document.getElementById("input-num").value;
const courseName = `${dept}${num}`;
courseName.addEventListener('input', function(){
  if (!courseList.includes(courseName)) {
    courseName.setCustomValidity('this course does not exist');
    let feedback = document.querySelector('#searchFeedback');
    feedback.textContent = 'this course does not exist';
  } else {
    courseName.setCustomValidity('');
  }  
})
