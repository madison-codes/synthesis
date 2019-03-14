import * as React from "react";
import { Link } from "react-router-dom";
import { WithStyles, withStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { saveVoice } from "../../actions/index";
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

interface EnterDispatchProps extends WithStyles<typeof styles> {
  saveVoice: (name: string, text: string) => void;
}

interface EnterState {
  name: string;
  text: string;
}

export class Enter extends React.Component<EnterDispatchProps, EnterState> {
  constructor(props: EnterDispatchProps) {
    super(props);
    this.state = {
      name: "",
      text: ""
    };
  }

  addName(name: string) {
    this.setState({ name });
  }

  addText(text: string) {
    this.setState({ text });
  }

  submit() {
    this.props.saveVoice(this.state.name, this.state.text);
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
              id="name"
              name="name"
              onChange={e => this.addName(e.target.value)}
              placeholder="Type your title"
              margin="normal"
              fullWidth
            />
            <TextField
              required
              id="message"
              name="message"
              onChange={e => this.addText(e.target.value)}
              margin="normal"
              variant="outlined"
              placeholder="Type your text here to convert it to voice."
              fullWidth
            />
          </Grid>
          <Link to="/download">
            /
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.submit()}
              className={classes.button}
            >
              <ChatBubble className={classes.icon} />
              {"To Voice"}
            </Button>
          </Link>
        </Grid>
      </div>
    );
  }
}

const mapDispatchToProps = { saveVoice };

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Enter));
