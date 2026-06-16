export const findFolder = (folders = [], folderId) =>
  folders.find((folder) => String(folder.id) === String(folderId));

export const findNote = (notes = [], noteId) =>
  notes.find((note) => String(note.id) === String(noteId));

export const getNotesForFolder = (notes = [], folderId) =>
  !folderId
    ? notes
    : notes.filter((note) => String(note.folder_id) === String(folderId));

export const countNotesForFolder = (notes = [], folderId) =>
  notes.filter((note) => String(note.folder_id) === String(folderId)).length;
