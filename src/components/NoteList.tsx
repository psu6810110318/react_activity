import type { Note } from '../types';

interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void;
}

function NoteList({ notes, onDelete }: NoteListProps) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          <div className="note-content">{note.text}</div>
          <button onClick={() => onDelete(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;