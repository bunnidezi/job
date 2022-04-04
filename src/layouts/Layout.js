import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  shape: { borderRadius: 16 },
  palette: {
    mode: "dark",
  },
});

function Layout() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default Layout;
