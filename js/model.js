import { renderCourse } from "./view";

let curCourse = null;
let data = null;

fetch("../data.json")
  .then((res) => res.json())
  .then((resJson) => {
    data = resJson;
    curCourse = Object.keys(data)[0];
    renderCourse(curCourse);
  });

export function getCourseList() {
  return Object.keys(data);
}

export function getCourse() {
  const courseData = data[curCourse];
  courseData.title = curCourse;
  return courseData;
}

export function addComment(author, comment) {
  data[curCourse].comments.push({ author, body: comment });
}

export function getComments() {
  return data[curCourse].comments;
}

export function setThumbUp(professor) {
  data[curCourse].professors.find((p) => p.name === professor).thumbUp = true;
  data[curCourse].professors.find(
    (p) => p.name === professor
  ).thumbDown = false;
}

export function setThumbDown(professor) {
  data[curCourse].professors.find((p) => p.name === professor).thumbUp = false;
  data[curCourse].professors.find((p) => p.name === professor).thumbDown = true;
}

export function getProfessors() {
  return data[curCourse].professors;
}

export function getCurCourse() {
  return curCourse;
}

export function changeCourse(newCourse) {
  if (newCourse in data) {
    curCourse = newCourse;
  }
}
