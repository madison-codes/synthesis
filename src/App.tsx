import * as React from "react";
import { Route } from "react-router-dom";
import { WithStyles, withStyles, createStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "./components/atoms/AppBar";
import Paper from "@material-ui/core/Paper";
import { Theme } from "./theme/Theme";
import Record from "./components/pages/Record";
import Download from "./components/pages/Download";
import Settings from "./components/pages/Settings";
import Typography from "@material-ui/core/Typography";

const styles = (theme: Theme) =>
  createStyles({
    layout: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      flexDirection: "column"
    },
    paper: {
      padding: theme.spacing.unit * 2,
      overflowX: "hidden",
      marginTop: theme.spacing.unit * 4,
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
      [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
        width: 600,
        marginLeft: "auto",
        marginRight: "auto"
      }
    }
  });

interface AppProps extends WithStyles<typeof styles> {}

interface AppState {}

export class App extends React.Component<AppProps, AppState> {
  render() {
    const { classes } = this.props;
    return (
      <>
        <CssBaseline />
        <AppBar />
        <main className={classes.layout}>
          <Typography component="h1" variant="h1">
            toVoice
          </Typography>
          <Paper className={classes.paper}>
            <Route path="/" exact component={Record} />
            <Route path="/settings/" component={Settings} />
            <Route path="/download/" component={Download} />
          </Paper>
        </main>
      </>
    );
  }
}

export default withStyles(styles)(App);
