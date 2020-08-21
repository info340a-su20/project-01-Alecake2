import { renderComments, renderProfessors } from "./view.js";
import {
  addComment,
  getProfessors,
  getComments,
  setThumbUp,
  setThumbDown,
} from "./model.js";

export function sendComment(course, comment) {
  addComment(course, "You", comment);
  renderComments(getComments(course));
}

export function thumbUp(course, professor) {
  setThumpUp(course, professor);
  renderProfessors(getProfessors(course));
}

export function thumbDown(course, professor) {
  setThumbDown(course, professor);
  renderProfessors(getProfessors(course));
}
