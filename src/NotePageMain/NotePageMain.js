import React, { useContext } from "react";
import Note from "../Note/Note";
import NoteContext from "../NoteContext";
import { findNote } from "../notes-helpers";
import "./NotePageMain.css";

export default function NotePageMain(props) {
  const { notes = [] } = useContext(NoteContext);
  const { noteId } = props.match.params;
  const note = findNote(notes, noteId) || { content: "" };

  return (
    <section className="NotePageMain">
      <Note
        id={note.id}
        name={note.name}
        modified={note.modified}
        onDeleteNote={() => props.history.push("/")}
      />
      <div className="NotePageMain__content">
        {(note.content || "").split(/\n \r|\n/).map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </section>
  );
}
