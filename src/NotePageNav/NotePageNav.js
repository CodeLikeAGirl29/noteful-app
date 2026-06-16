import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircleButton from "../CircleButton/CircleButton";
import NoteContext from "../NoteContext";
import { findNote, findFolder } from "../notes-helpers";
import "./NotePageNav.css";

export default function NotePageNav(props) {
  const { notes = [], folders = [] } = useContext(NoteContext);
  const { noteId } = props.match.params;
  const note = findNote(notes, noteId);
  const folder = note && findFolder(folders, note.folder_id);

  return (
    <div className="NotePageNav">
      <CircleButton
        tag="button"
        role="link"
        onClick={() => props.history.goBack()}
        className="NotePageNav__back-button"
      >
        <FontAwesomeIcon icon="chevron-left" />
        <br />
        Back
      </CircleButton>
      {folder && <h3 className="NotePageNav__folder-name">{folder.name}</h3>}
    </div>
  );
}
