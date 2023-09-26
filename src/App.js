import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useLocalStorage } from "./hooks";
import NotesPage from "./pages/NotesPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  const [user, setuser] = useState("");
  const [notes, setNotes] = useLocalStorage("notes", []);

  const handleCreate = (content) => {
    const newNote = { id: Date.now(), author: user, body: content };
    setNotes([...notes, newNote]);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const handleLogin = (user) => {
    setuser(user);
  };

  const handleLogout = () => {
    setuser("");
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NotesPage
            user={user}
            onLogout={handleLogout}
            notes={notes}
            onDelete={handleDelete}
            onCreate={handleCreate}
          />
        </Route>
        <Route path="/login" exact>
          <LoginPage onLogin={handleLogin} />
        </Route>
      </Switch>
    </Router>
  );
}
