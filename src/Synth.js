import React from "react";
import "./styles.css";
import Tone from "tone";

let synth = new Tone.Synth().toMaster();

const synthB = new Tone.Synth({
  oscillator: {
    type: "square"
  },
  envelope: {
    attack: 0,
    decay: 1,
    sustain: 0.4,
    release: 4
  }
}).toMaster();

export default function playSound() {
  synthB.triggerAttackRelease("C4", "9n");
}
