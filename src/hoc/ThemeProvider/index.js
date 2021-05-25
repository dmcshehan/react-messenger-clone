import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Source Sans Pro",
  },
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: {
      main: green[500],
    },
  },
});

function index({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default index;
