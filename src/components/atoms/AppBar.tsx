import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import { WithStyles, withStyles, createStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import RecordingsMenu from "../RecordingsMenu";
// import Menu from "@material-ui/icons/Menu";
import Settings from "@material-ui/icons/Settings";
import { Theme } from "../../theme/Theme";

const width = "100vw";

const styles = (theme: Theme) =>
  createStyles({
    root: { width },
    toolbar: {
      width,
      padding: `0 ${theme.spacing.unit}px`,
      display: "flex",
      justifyContent: "space-between"
    }
  });

interface NavProps extends WithStyles<typeof styles> {}

interface NavState {}

export class Nav extends React.Component<NavProps, NavState> {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="fixed" color="default" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          {/* <IconButton color="inherit" aria-label="Menu"> */}
          {/* <Menu /> */}
          <RecordingsMenu />
          {/* </IconButton> */}
          <Link to="/settings">
            <IconButton>
              {/* This is not working and I have NO idea why */}
              <Settings />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Nav);
