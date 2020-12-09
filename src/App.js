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

import { Button, Container, Header } from "semantic-ui-react";
import Clock from "./classes/Clock";
import Yo from "./classes/Yo";
import { useState } from "react";

function App() {
  const [showClock, setShowClock] = useState(false);
  return (
    <Container>
      <Header>LifeCylcle</Header>
      <Button onClick={() => setShowClock(!showClock)}>
        {showClock ? "Hide" : "Show"}
      </Button>
      {showClock && <Clock someProp="testt" />}
      <Yo />

    </Container>
  );
}

export default App;
