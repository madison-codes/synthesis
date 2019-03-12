import * as React from "react";
import { WithStyles, withStyles, createStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import Add from "@material-ui/icons/Add";
import { Theme } from "../../theme/Theme";

const styles = (theme: Theme) =>
  createStyles({
    fab: {
      bottom: theme.spacing.unit,
      position: "fixed",
      right: theme.spacing.unit
    }
  });

interface FabButtonProps extends WithStyles<typeof styles> {}

interface FabButtonState {}

export class FabButton extends React.Component<FabButtonProps, FabButtonState> {
  render() {
    const { classes } = this.props;
    return window.location.pathname === "/" || " " ? null : (
      <Link to="/">
        <Fab color="secondary" className={classes.fab}>
          <Add />
        </Fab>
      </Link>
    );
  }
}

export default withStyles(styles)(FabButton);
