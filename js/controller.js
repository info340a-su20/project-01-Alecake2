import { renderComments, renderProfessors } from "./view.js";
import {
  addComment,
  getProfessors,
  getComments,
  setThumbUp,
  setThumbDown,
} from "./model.js";

export function sendComment(comment) {
  addComment(course, "You", comment);
  renderComments(getComments());
}

export function thumbUp(course, professor) {
  setThumpUp(course, professor);
  renderProfessors(getProfessors());
}

export function thumbDown(course, professor) {
  setThumbDown(course, professor);
  renderProfessors(getProfessors());
}
