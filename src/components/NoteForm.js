import styled from "@emotion/styled";
import { useState } from "react";
import { Card, TextArea, Button } from "./ui";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > button {
    align-self: flex-end;
  }
`;

function NoteForm({ onCreate, user }) {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(content);
    setContent("");
  };

  return (
    <Card>
      <Form onSubmit={handleSubmit}>
        <TextArea
          placeholder={`${user}, add a note here`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit" disabled={!content}>
          Add
        </Button>
      </Form>
    </Card>
  );
}

export default NoteForm;
