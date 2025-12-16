import React, { useState } from 'react';

interface NoteFormProps {
  onAdd: (text: string) => void;
}

function NoteForm({ onAdd }: NoteFormProps) {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return; 
    }
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={handleChange} 
        placeholder="Enter your note..." 
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;