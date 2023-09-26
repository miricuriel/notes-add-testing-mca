import styled from "@emotion/styled";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
  width: fit-content;
`;

const TextArea = styled.textarea`
  border: none;
`;

const Input = styled.input``;

const Button = styled.button`
  padding: 4px 8px;
  text-align: center;
  width: fit-content;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: #aa808b;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:focus {
    outline: none;
    border: 1px solid #212121ff;
  }
  &:disabled {
    background-color: #99999940;
    cursor: not-allowed;
  }
`;

export { Card, TextArea, Button, Input };
