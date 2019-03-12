import { createMuiTheme } from "@material-ui/core/styles";

const primary = "#ED82EE";
const primaryDark = "#220526";
const secondary = "#301E3E";
// const light = "";
// const dark = "";
const black = "#2A2A2A";
const white = "#fff";
const neutral = "#959EBD";

const theme = createMuiTheme({
  palette: {
    common: {
      black,
      white
    },
    primary: { main: primary },
    secondary: { main: secondary },
    grey: {
      50: neutral
    }
  },
  spacing: {
    unit: 24
  },
  overrides: {
    MuiIcon: {
      root: {
        color: primary
      }
    },
    MuiAppBar: {
      root: {
        position: "fixed"
      }
    },
    MuiButton: {
      raisedPrimary: {
        backgroundColor: secondary,
        color: primary,
        "&:hover": {
          backgroundColor: primaryDark
        }
      },
      flatSecondary: {
        color: neutral
      },
      fab: {
        boxShadow: "none !important"
      }
    },
    MuiPaper: {
      elevation3: {
        margin: "0 40px",
        padding: 40,
        boxShadow: "none !important"
      }
    }
  }
});

export type Theme = typeof theme;

export default theme;
