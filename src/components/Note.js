import styled from "@emotion/styled";
import { FaTrashAlt } from "react-icons/fa";
import { Card } from "./ui";

const CardContainer = styled(Card)`
  width: 180px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: fit-content;
  align-items: flex-start;
  gap: 4px;
`;

const Content = styled.p`
  font-size: 14px;
`;

const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 12px;
  color: #aa808b;
  & > svg {
    cursor: pointer;
  }
`;

const Author = styled.span`
  color: #999999;
`;

function Note({ note, user, onDelete }) {
  return (
    <CardContainer>
      <Content>{note.body}</Content>
      <Footer>
        <Author>{`By ${note.author}`}</Author>
        {user === note.author && (
          <FaTrashAlt onClick={() => onDelete(note.id)} />
        )}
      </Footer>
    </CardContainer>
  );
}

export default Note;
