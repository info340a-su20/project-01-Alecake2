const data = {
  info200: {
    professors: [
      {
        name: "Joe Schmo",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        rate: 0,
      },
      {
        name: "John Brown",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        rate: 0,
      },
      {
        name: "Jane Smith",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        rate: 0,
      },
    ],
    comments: [],
    gpa: 3.6,
    timeConsumed: 10,
    readingLoad: 3000,
    practiceProblem: null,
  },
};

export function getCourseList() {
  return Object.keys(data);
}

export function getCourse(name) {
  return data[name];
}
