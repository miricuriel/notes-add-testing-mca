import { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";
import { Card, Button, Input } from "../components/ui";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

function LoginPage({ onLogin }) {
  const [name, setName] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(name);
    history.push("/");
  };

  return (
    <Container>
      <h2>Identify yourself</h2>
      <Card>
        <LoginForm onSubmit={handleSubmit}>
          <Input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Button type="submit" disabled={!name}>
            Continue
          </Button>
        </LoginForm>
      </Card>
    </Container>
  );
}

export default LoginPage;
