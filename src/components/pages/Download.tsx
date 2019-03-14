import * as React from "react";
import * as WaveSurfer from "wavesurfer.js";
import Fab from "../../components/atoms/Fab";
import { connect } from "react-redux";

interface DownloadProps {
  id: string;
}

interface DownloadState {
  loading: boolean;
}

export class Download extends React.Component<DownloadProps, DownloadState> {
  constructor(props: DownloadProps) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentWillReceiveProps(nextProps: DownloadProps) {
    if (this.props.id !== nextProps.id) {
      this.setState({ loading: false });
    }
  }

  getMarkup() {
    const wavesurfer = WaveSurfer.create({
      container: "#waveform",
      waveColor: "violet",
      progressColor: "purple"
    });
    wavesurfer.load("output1.mp3");

    return (
      <>
        <>
          <audio controls>
            <source src="output1.mp3" type="audio/mp3" />
          </audio>
        </>
        <Fab />
      </>
    );
  }

  getLoadingMarkup() {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div id="waveform" />
        {this.state.loading ? this.getLoadingMarkup() : this.getMarkup()}
      </div>
    );
  }
}

const mapStateToProps = (state: GlobalState) => ({ id: state.id });

export default connect(
  mapStateToProps,
  {}
)(Download);
