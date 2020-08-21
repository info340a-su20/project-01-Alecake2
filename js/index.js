import { getCourse } from "./model.js";
import { renderCourse } from "./view.js";

const defaultCourse = "info200";

renderCourse(defaultCourse, getCourse(defaultCourse));
