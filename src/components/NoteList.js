import styled from "@emotion/styled";

import Note from "./Note";

const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
`;

function NoteList({ notes, user, onDelete }) {
  return (
    <Container>
      {notes.map((note) => (
        <Note key={note.id} note={note} user={user} onDelete={onDelete} />
      ))}
    </Container>
  );
}

export default NoteList;
