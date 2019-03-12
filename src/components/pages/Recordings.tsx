import * as React from "react";
// import { initialize } from "../actions/index";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import { connect } from "react-redux";

interface RecordingsProps {
  handleNext: () => void;
}

interface RecordingsState {
  password: string;
}

export class Recordings extends React.Component<
  RecordingsProps,
  RecordingsState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      password: ""
    };
  }

  addRecordings(password: string) {
    this.setState({ password });
  }

  submit() {
    // this.props.initialize(this.state.password);
    this.props.handleNext();
  }

  render() {
    return (
      <>
        <Typography variant="h6" gutterBottom>
          Recordings
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="password"
              name="password"
              label="Recordings"
              onChange={e => this.addRecordings(e.target.value)}
              fullWidth
              autoComplete="fname"
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.submit()}
        >
          {"Submit"}
        </Button>
      </>
    );
  }
}

export default Recordings;
