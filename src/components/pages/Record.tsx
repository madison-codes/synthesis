import * as React from "react";
import { WithStyles, withStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { toVoice } from "../../actions/index";
import { Theme } from "../../theme/Theme";
import ChatBubble from "@material-ui/icons/ChatBubbleOutline";

const styles = (theme: Theme) =>
  createStyles({
    flex: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      bottom: theme.spacing.unit,
      position: "fixed",
      right: theme.spacing.unit,
      borderRadius: theme.spacing.unit
    },
    icon: {
      margin: `0 ${theme.spacing.unit}px 0 0`
    }
  });

interface EnterProps extends WithStyles<typeof styles> {
  toVoice: (message: string) => void;
}

interface EnterState {
  message: string;
  snackbarOpen: boolean;
}

export class Enter extends React.Component<EnterProps, EnterState> {
  constructor(props: EnterProps) {
    super(props);
    this.state = {
      message: "",
      snackbarOpen: false
    };
  }

  addMessage(message: string) {
    this.setState({ message });
  }

  submit() {
    this.props.toVoice(this.state.message);
    // TODO programatically reroute to Download page
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.flex}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} />
          <Grid item xs={12}>
            <TextField
              required
              id="title"
              name="title"
              onChange={e => this.addMessage(e.target.value)}
              placeholder="Type your title"
              margin="normal"
              fullWidth
            />
            <TextField
              required
              id="message"
              name="message"
              onChange={e => this.addMessage(e.target.value)}
              margin="normal"
              variant="outlined"
              placeholder="Type your text here to convert it to voice."
              fullWidth
            />
          </Grid>
          <Button
            variant="contained"
            color="primary"
            onClick={() => this.submit()}
            className={classes.button}
          >
            <ChatBubble className={classes.icon} />
            {"To Voice"}
          </Button>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = { toVoice };

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Enter));
