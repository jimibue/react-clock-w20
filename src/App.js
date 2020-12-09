import logo from "./logo.svg";
import "./App.css";
import { Container, Header, Button } from "semantic-ui-react";
import Data from "./func/Data";
import { useState } from "react";

function App() {
  const [showData, setShowData] = useState(false);
  return (
    <Container>
      <Header>LifeCylcle</Header>
      {showData && <Data />}
      <Button onClick={() => setShowData(!showData)}>
        {showData ? "Hide" : "Show"}
      </Button>
    </Container>
  );
}

export default App;
