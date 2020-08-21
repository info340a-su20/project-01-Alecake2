import { renderComments, renderProfessors } from "./view.js";
import {
  addComment,
  getProfessors,
  getComments,
  setThumbUp,
  setThumbDown,
} from "./model.js";

export function sendComment(comment) {
  addComment("You", comment);
  renderComments(getComments());
}

export function thumbUp(professor) {
  setThumbUp(professor);
  renderProfessors(getProfessors());
}

export function thumbDown(professor) {
  setThumbDown(professor);
  renderProfessors(getProfessors());
}
