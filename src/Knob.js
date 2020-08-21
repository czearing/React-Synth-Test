import React from "react";
import { render } from "react-dom";
import { Knob } from "react-rotary-knob";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "6rem"
};

export default class LimitedKnob extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(val) {
    //ignore change if distance is greater than defined
    //here we use a distance of 200 because our max value is 1000
    //change if needed
    const maxDistance = 10;
    let distance = Math.abs(val - this.state.value);
    if (distance > maxDistance) {
      return;
    } else {
      this.setState({ value: val });
      console.log(val);
    }
  }
  render() {
    let { value, ...rest } = this.props;
    let currentVal = this.state.value;
    return (
      <div className="wrapper">
        <Knob
          value={this.state.value}
          onChange={this.handleOnChange}
          {...rest}
        />
      </div>
    );
  }
}

const App = () => (
  <div style={styles}>
    <LimitedKnob
      style={{ display: "inline-block" }}
      min={0}
      max={10}
      unlockDistance={0}
      preciseMode={false}
      width={200}
      height={200}
    />
  </div>
);

render(<App />, document.getElementById("root"));
