import logo from "./logo.svg";
import "./App.css";

import { Button, Container, Header } from "semantic-ui-react";
import Clock from "./classes/Clock";
import Data from "./func/Data";
import Yo from "./classes/Yo";
import { useState } from "react";

function App() {
  const [showClock, setShowClock] = useState(false);
  const [showData, setShowData] = useState(false);
  return (
    <Container>
      <Header>LifeCylcle</Header>
      <Button onClick={() => setShowClock(!showClock)}>
        {showClock ? "Hide" : "Show"}
      </Button>
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

      {showClock && <Clock someProp="testt" />}



    </Container>
  );
}

export default App;
