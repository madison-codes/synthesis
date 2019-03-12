import * as React from "react";
import * as WaveSurfer from "wavesurfer.js";

export default class Review extends React.Component {
  componentDidMount() {
    const wavesurfer = WaveSurfer.create({
      container: "#waveform",
      waveColor: "violet",
      progressColor: "purple"
    });
    wavesurfer.load("../output.mp3");
  }

  render() {
    return (
      <>
        <audio controls>
          <source src="../output.mp3" type="audio/mp3" />
        </audio>
        <div id="waveform" />
      </>
    );
  }
}
