import React from "react";
import "./styles.css";
import Tone from "tone";
import Piano from "./Piano.js";
import LimitedKnob from "./Knob.js";
export default function App() {
  let synth = new Tone.Synth().toMaster();
  console.log(this.value);
  const [attack, setAttack] = React.useState(0);
  const [decay, setDecay] = React.useState(1);
  const [sustain, setSustain] = React.useState(0.4);
  const [release, setRelease] = React.useState(4);
  const synthB = new Tone.Synth({
    oscillator: {
      type: "square"
    },
    envelope: {
      attack: attack,
      decay: decay,
      sustain: sustain,
      release: release
    }
  }).toMaster();

  function playSound() {
    synthB.triggerAttackRelease("C4", "9n");
  }

  function updateAttack() {
    setAttack(this.state.value);
  }

  return (
    <div className="App">
      <button onClick={playSound}> Press Me!</button>
      <button onClick={updateAttack} />
      <p>attack</p>
      <LimitedKnob
        style={{ display: "inline-block" }}
        min={0}
        max={10}
        unlockDistance={0}
        preciseMode={false}
        width={200}
        height={200}
        onClick={updateAttack}
      />
      {synthB.envelope.attack}
      <p>decay</p>
      {synthB.envelope.decay}
      <p>sustain</p>
      {synthB.envelope.sustain}
      <p>release</p>
      {synthB.envelope.release}
      <Piano />
    </div>
  );
}
