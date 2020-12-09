import React from "react";
import { Button, Header } from "semantic-ui-react";

export default class Clock extends React.Component {
  state = { date: new Date(), counter: 0 };

  componentDidMount() {
    console.log("component did mount");
    this.ticker = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    const { counter } = this.state;

    if (counter < 10) {
      setTimeout(() => {
        this.setState({ counter: counter + 1 });
      }, 1000);
    }

    if (counter >= 10) {
      clearInterval(this.ticker);
    }
  }

  componentWillUnmount() {
    console.log("component will unmount");
    clearInterval(this.ticker);
  }

  tick = () => {
    this.setState({ date: new Date() });
  };
  render() {
    const { date, counter } = this.state;
    console.log("Clock Render Called");
    return (
      <>
        <Header as="h3">Clock</Header>

        <p onClick={this.tick}>{date.toLocaleTimeString()}</p>
        <p>{counter}</p>
      </>
    );
  }
}
