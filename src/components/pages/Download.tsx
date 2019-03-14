import * as React from "react";
import * as WaveSurfer from "wavesurfer.js";
import Fab from "../../components/atoms/Fab";
import { WithStyles, withStyles, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

interface DownloadProps {
  id: string;
}

interface DownloadState {
  loading: boolean;
}

type AllDownloadProps = WithStyles<typeof styles> & DownloadProps;

const styles = () =>
  createStyles({
    layout: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  });

export class Download extends React.Component<AllDownloadProps, DownloadState> {
  constructor(props: AllDownloadProps) {
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
          <br />
          <Typography variant="subtitle1" gutterBottom>
            Play and download MP3 your text to voice MP3.
          </Typography>
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
      <div className={this.props.classes.layout}>
        <CircularProgress />
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
)(withStyles(styles)(Download));
