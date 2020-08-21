import { renderComments } from "./view.js";
import { addComment, getComments } from "./model.js";

export function sendComment(course, comment) {
  addComment(course, "You", comment);
  renderComments(getComments(course));
}
