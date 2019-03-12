import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { WithStyles, withStyles, createStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "./components/atoms/AppBar";
import { Theme } from "./theme/Theme";
import Record from "./components/pages/Record";
import Download from "./components/pages/Download";
import Recordings from "./components/pages/Recordings";
import Settings from "./components/pages/Settings";
import Fab from "./components/atoms/Fab";

const styles = (theme: Theme) =>
  createStyles({
    layout: {
      width: "100vw",
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
          <Router>
            <div>
              <Route path="/" exact component={Record} />
              <Route path="/settings/" component={Settings} />
              <Route path="/download/" component={Download} />
              <Route path="/recordings/" component={Recordings} />
              <Fab />
            </div>
          </Router>
        </main>
      </>
    );
  }
}

export default withStyles(styles)(App);
