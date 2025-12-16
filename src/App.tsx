import NotesForm from './components/NotesForm'; 
import NoteList from './components/NoteList';

function App() {
  return (
    <div className="app">
      <h1>Sticky Note Wall</h1>
      <NotesForm />
      <NoteList />
      
    </div>
  );
}

export default App;