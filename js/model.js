const data = {
  info200: {
    professors: [
      {
        name: "John Brown",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        img: "img/instructorone.jpg",
        accuracy: 0,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Joe Schmo",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        img: "img/instructortwo.jpg",
        accuracy: 0,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Jane Smith",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        img: "img/instructorthree.jpg",
        accuracy: 0,
        thumbUp: false,
        thumbDown: false,
      },
    ],
    comments: [
      {
        author: "anonymous A",
        body: "This class is great and professors are so friendly!",
      },
    ],
    gpa: 3.6,
    timeConsumed: "10 Hours",
    readingLoad: "3000 words",
    practiceProblemLoad: "heavy",
  },
};

const defaultCourse = "info200";
let curCourse = defaultCourse;

export function getCourseList() {
  return Object.keys(data);
}

export function getCourse(name) {
  if (name in data) {
    const courseData = data[name];
    courseData.title = name;
    return courseData;
  }
}

export function addComment(author, comment) {
  data[curCourse].comments.push({ author, body: comment });
}

export function getComments() {
  return data[curCourse].comments;
}

export function setThumbUp(professor) {
  data[curCourse].professors[professor].thumbUp = true;
  data[curCourse].professors[professor].thumbDown = false;
}

export function setThumbDown(professor) {
  data[curCourse].professors[professor].thumbUp = false;
  data[curCourse].professors[professor].thumbDown = true;
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
