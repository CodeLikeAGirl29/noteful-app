import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NoteContext from "../NoteContext";
import "./Note.css";

import API_BASE from "../config";

export default function Note(props) {
  const context = useContext(NoteContext);

  function handleClickDelete(e) {
    e.preventDefault();
    const noteId = props.id;
    fetch(`${API_BASE}/notes/${noteId}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => Promise.reject(error));
        }
        return res;
      })
      .then(() => {
        context.deleteNote(noteId);
        if (props.onDeleteNote) {
          props.onDeleteNote(noteId);
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="Note">
      <h2 className="Note__title">
        <Link to={`/note/${props.id}`}>{props.name}</Link>
      </h2>
      <button
        className="Note__delete"
        type="button"
        onClick={handleClickDelete}
      >
        <FontAwesomeIcon icon="trash-alt" /> remove
      </button>
      <div className="Note__dates">
        <div className="Note__dates-modified">
          Modified{" "}
          <span className="Date">
            {props.modified && format(props.modified, "Do MMM YYYY")}
          </span>
        </div>
      </div>
    </div>
  );
}
