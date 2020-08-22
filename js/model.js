const data = {
  info200: {
    professors: {
      "John Brown": {
        name: "John Brown",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        img: "img/one.jpg",
        accuracy: 2,
        thumbUp: false,
        thumbDown: false,
      },
      "John Brown": {
        name: "Joe Schmo",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        img: "img/two.jpg",
        accuracy: 4,
        thumbUp: false,
        thumbDown: false,
      },
      "John Brown": {
        name: "Jane Smith",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        img: "img/three.jpg",
        accuracy: 4,
        thumbUp: false,
        thumbDown: false,
      },
    },
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

  math124: {
    professors: [
      {
        name: "Julia Pevtsova",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        img: "img/four.jpg",
        accuracy: 3,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Baker Caitlyn",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        img: "img/five.jpg",
        accuracy: 4,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Blair Whitehouse",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        img: "img/six.jpg",
        accuracy: 4,
        thumbUp: false,
        thumbDown: false,
      },
    ],
    comments: [
      {
        author: "anonymous A",
        body: "If you do a lot of practice tests before exam, it would help a lot",
      },
    ],
    gpa: 3.9,
    timeConsumed: 15,
    readingLoad: 30,
    practiceProblemLoad: "heavy",
  },

  eng131: {
    professors: [
      {
        name: "Wasim Dennis",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        img: "img/seven.jpg",
        accuracy: 4,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Nikola Dillon",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        img: "img/eight.jpg",
        accuracy: 3,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Anjali Blundell",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        img: "img/nine.jpg",
        accuracy: 4,
        thumbUp: false,
        thumbDown: false,
      },
    ],
    comments: [
      {
        author: "anonymous A",
        body: "Lectures were well organized and his website has a lot of great resources that I continue to use after finishing this class. Really cares about his students and what they learned.!",
      },
    ],
    gpa: 3.5,
    timeConsumed: 20,
    readingLoad: 2000,
    practiceProblemLoad: "light",
  },

  bio180: {
    professors: [
      {
        name: "Zena Rooney",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        img: "img/ten.jpg",
        accuracy: 5,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Keavy Mcguire",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        img: "img/eleven.jpg",
        accuracy: 3,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Ella-Rose Hull",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        img: "img/twelve.jpg",
        accuracy: 4,
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
    gpa: 3.9,
    timeConsumed: 20,
    readingLoad: 1500,
    practiceProblemLoad: "medium",
  },

  chem152: {
    professors: [
      {
        name: "Mateo Ochoa",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        img: "img/thirteen.jpg",
        accuracy: 3.7,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Sanna Welch",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        img: "img/21.jpg",
        accuracy: 4,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Malak Davie",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        img: "img/fifteen.jpg",
        accuracy: 4.8,
        thumbUp: false,
        thumbDown: false,
      },
    ],
    comments: [
      {
        author: "anonymous A",
        body: "Great and entertaining lectures, concepts were explained thoroughly and for the most part left me feeling prepared for exams 152",
      },
    ],
    gpa: 3.7,
    timeConsumed: 25,
    readingLoad: 270,
    practiceProblemLoad: "heavy",
  },

  com200: {
    professors: [
      {
        name: "Shay Church",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        img: "img/sixteen.jpg",
        accuracy: 4.6,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Maison Daniel",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        img: "img/seventeen.jpg",
        accuracy: 3,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Jardel Compton",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        img: "img/eighteen.jpg",
        accuracy: 4,
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
    gpa: 3.56,
    timeConsumed: 13,
    readingLoad: 1000,
    practiceProblemLoad: "very light",
  },

  econ200: {
    professors: [
      {
        name: "Woodard Lindsay",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        img: "img/ninteen.jpg",
        accuracy: 4,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Zi Manning",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        img: "img/22.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Dominik Goulding",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        img: "img/twenty.jpg",
        accuracy: 3.5,
        thumbUp: false,
        thumbDown: false,
      },
    ],
    comments: [
      {
        author: "anonymous A",
        body: "Great lectures and straightforward exams! Show up, listen, and lightly read articles and it is easy to do well.",
      },
    ],
    gpa: 3.8,
    timeConsumed: 17,
    readingLoad: 700,
    practiceProblemLoad: "medium",
  },

  cse142: {
    professors: [
      {
        name: "Gavin Begum",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        img: "img/fourteen.jpg",
        accuracy: 4,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Rita Byrne",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        img: "img/24.jpg",
        accuracy: 3.8,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Jordanne Lowe",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        img: "img/23.jpg",
        accuracy: 4.7,
        thumbUp: false,
        thumbDown: false,
      },
    ],
    comments: [
      {
        author: "anonymous A",
        body: "The class is accelerated, and the professors didn't want to waste time explaining things. Skips way too much. This class only works for people who started coding real early.",
      },
    ],
    gpa: 3.54,
    timeConsumed: 20,
    readingLoad: 40,
    practiceProblemLoad: "very heavy",
  },

  stat311: {
    professors: [
      {
        name: "Saanvi Browning",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        img: "img/25.jpg",
        accuracy: 4,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Ishika Vargas",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        img: "img/26.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Reanna Morin",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        img: "img/three.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
    ],
    comments: [
      {
        author: "anonymous A",
        body: "Amazing class!!!! if you study lecture slides and do your homework, you should be fine.",
      },
    ],
    gpa: 3.76,
    timeConsumed: 17,
    readingLoad: 70,
    practiceProblemLoad: "heavy",
  },

  phys121: {
    professors: [
      {
        name: "Maksim Ayers",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        img: "img/one.jpg",
        accuracy: 4,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Zoya Coleman",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        img: "img/four.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Tamsin Aldred",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        img: "three.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
    ],
    comments: [
      {
        author: "anonymous A",
        body: "The physics intro sequence in general is tough, but I think taking the course with Tasmin could help a lot!",
      },
    ],
    gpa: 3.76,
    timeConsumed: 17,
    readingLoad: 70,
    practiceProblemLoad: "heavy",
  },

  amath152: {
    professors: [
      {
        name: "Cristian Dupont",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        img: "img/five.jpg",
        accuracy: 4,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Arsalan Jackson",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        img: "img/six.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "August Werner",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        img: "img/fourteen.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
    ],
    comments: [
      {
        author: "anonymous A",
        body: "The best I have seen e.g. explaining the SVD.",
      },
    ],
    gpa: 3.76,
    timeConsumed: 17,
    readingLoad: 70,
    practiceProblemLoad: "heavy",
  },

  arch150: {
    professors: [
      {
        name: "Anish Daugherty",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        img: "img/sixteen.jpg",
        accuracy: 4,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Avleen Beattie",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        img: "img/twelve.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Eshaal Barlow",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        img: "img/24.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
    ],
    comments: [
      {
        author: "anonymous A",
        body: "One of the best studios taken, handsdown. Creative and thoughtful. Wish we had a real final review since we built the model stand.",
      },
    ],
    gpa: 3.76,
    timeConsumed: 17,
    readingLoad: 70,
    practiceProblemLoad: "heavy",
  },

  econ201: {
    professors: [
      {
        name: "Shahzaib Shannon",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        img: "img/seven.jpg",
        accuracy: 4,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Dorothy Ferreira",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        img: "img/26.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Mitchel Wilcox",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        img: "img/ten.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
    ],
    comments: [
      {
        author: "anonymous A",
        body: "A good TA is important to get a good grade in this course.",
      },
    ],
    gpa: 3.76,
    timeConsumed: 17,
    readingLoad: 70,
    practiceProblemLoad: "heavy",
  },

  info201: {
    professors: [
      {
        name: "Tasmin Mccallum",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        img: "img/23.jpg",
        accuracy: 4,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Kirstin Mcguire",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        img: "img/26.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Louie Miller",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        img: "img/eleven.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
    ],
    comments: [
      {
        author: "anonymous A",
        body: "AWESOME CLASS! I think it did help that I was greatly interested in the class, but that being said I knew nothing about info going in.",
      },
    ],
    gpa: 3.76,
    timeConsumed: 17,
    readingLoad: 70,
    practiceProblemLoad: "heavy",
  },

  math126: {
    professors: [
      {
        name: "Anja Stephenson",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        img: "img/ninteen.jpg",
        accuracy: 4,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Milli Bowes",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        img: "img/27.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Patrik Mcclain",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        img: "img/seven.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
    ],
    comments: [
      {
        author: "anonymous A",
        body: "Patrik is a nice guy and is really funny, but his class was pretty hard because not a ton of the homework concepts are covered in lecture so I had to teach myself a lot of the course.",
      },
    ],
    gpa: 3.76,
    timeConsumed: 17,
    readingLoad: 70,
    practiceProblemLoad: "heavy",
  },

  math125: {
    professors: [
      {
        name: "Dominik Jaramillo",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        img: "img/23.jpg",
        accuracy: 4,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Mahi Ayala",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        img: "img/eight.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Kirk Alvarez",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        img: "img/24.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
    ],
    comments: [
      {
        author: "anonymous A",
        body: "Dr. Alvarez is such a fun and passionate prof! Even though the subject is hard, she makes it fun. Explains concepts really well.",
      },
    ],
    gpa: 3.76,
    timeConsumed: 17,
    readingLoad: 70,
    practiceProblemLoad: "heavy",
  },

  stat220: {
    professors: [
      {
        name: "Camden Schmidt",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        img: "img/thirteen.jpg",
        accuracy: 4,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Melisa Ewing",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        img: "img/26.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Trent Edge",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        img: "img/five.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
    ],
    comments: [
      {
        author: "anonymous A",
        body: "Basically a review of algebra. This class was not super difficult",
      },
    ],
    gpa: 3.76,
    timeConsumed: 17,
    readingLoad: 70,
    practiceProblemLoad: "heavy",
  },

  cse143: {
    professors: [
      {
        name: "Zhane Bowers",
        desc:
          "This is a project based course with heavy lectures, attendance is required and prepare to read materials.",
        img: "img/22.jpg",
        accuracy: 4,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Diogo Fleming",
        desc:
          "My class will involve a lot of group work activities, participation is heavily emphasized. There will be no final tests.",
        img: "img/23.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
      {
        name: "Darnell Smyth",
        desc:
          "Tests will be the largest part of your grades, lecture videos are uploaded to Canvas, attendance is optional",
        img: "img/eleven.jpg",
        accuracy: 4.3,
        thumbUp: false,
        thumbDown: false,
      },
    ],
    comments: [
      {
        author: "anonymous A",
        body: "Lectures were interesting and Darnell is a very knowledgeable professor. Get ready to learn! 1 homework assignment per week, 1 midterm, and 1 final.",
      },
    ],
    gpa: 3.76,
    timeConsumed: 17,
    readingLoad: 70,
    practiceProblemLoad: "heavy",
  },
};

let curCourse = Object.keys(data)[0];

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
