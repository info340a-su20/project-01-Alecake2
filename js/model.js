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

export function getCourseList() {
  return Object.keys(data);
}

export function getCourse(name) {
  return data[name];
}

export function addComment(course, author, comment) {
  data[course].comments.push({ author, body: comment });
}

export function getComments(course) {
  return data[course].comments;
}
