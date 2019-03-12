import * as React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme";

export default ({ children }: { children: React.ReactElement<any> }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
