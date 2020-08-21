import React from "react";
import "./styles.css";

export default function Piano() {
  return (
    <ul id="piano">
      <li data-note="C4" className="key">
        <div data-note="C#4" className="black-key">
          C#
        </div>
        C
      </li>
      <li data-note="D4" className="key">
        <div data-note="D#4" className="black-key">
          D#
        </div>
        D
      </li>
      <li data-note="E4" className="key">
        E
      </li>
      <li data-note="F4" className="key">
        <div data-note="F#4" className="black-key">
          F#
        </div>
        F
      </li>
      <li data-note="G4" className="key">
        <div data-note="G#4" className="black-key">
          G#
        </div>
        G
      </li>
      <li data-note="A4" className="key">
        <div data-note="A#4" className="black-key">
          A#
        </div>
        A
      </li>
      <li data-note="B4" className="key">
        B
      </li>
    </ul>
  );
}
