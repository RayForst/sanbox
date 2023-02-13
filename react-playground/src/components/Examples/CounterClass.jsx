import React from "react";
import MyButton from "../UI/button/MyButton";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div className="component">
        <h3>
          Counter value:
          {this.state.count}
        </h3>
        <MyButton onClick={this.increment}>Increment</MyButton>
        <MyButton onClick={this.decrement}>Decrement</MyButton>
      </div>
    );
  }
}

export default ClassCounter;
