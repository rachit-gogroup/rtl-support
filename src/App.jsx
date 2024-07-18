import React from "react"
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from "@mui/material"
import { theme } from "./theme/theme"
import './App.css'
import Routing from "./route/Routing"

export default function RtlOptOut() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routing />
    </ThemeProvider>
  );
}

