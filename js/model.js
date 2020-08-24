import { renderCourse } from "./view.js";

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
  if (!curCourse || !data) {
    return;
  }
  const courseData = data[curCourse];
  courseData.title = curCourse;
  return courseData;
}

export function addComment(author, comment) {
  if (!curCourse || !data) {
    return;
  }
  data[curCourse].comments.push({ author, body: comment });
}

export function getComments() {
  if (!curCourse || !data) {
    return;
  }
  return data[curCourse].comments;
}

export function setThumbUp(professor) {
  if (!curCourse || !data) {
    return;
  }
  data[curCourse].professors.find((p) => p.name === professor).thumbUp = true;
  data[curCourse].professors.find(
    (p) => p.name === professor
  ).thumbDown = false;
}

export function setThumbDown(professor) {
  if (!curCourse || !data) {
    return;
  }
  data[curCourse].professors.find((p) => p.name === professor).thumbUp = false;
  data[curCourse].professors.find((p) => p.name === professor).thumbDown = true;
}

export function getProfessors() {
  if (!curCourse || !data) {
    return;
  }
  return data[curCourse].professors;
}

export function getCurCourse() {
  if (!curCourse || !data) {
    return;
  }
  return curCourse;
}

export function changeCourse(newCourse) {
  if (!curCourse || !data) {
    return;
  }
  if (newCourse in data) {
    curCourse = newCourse;
  }
}
