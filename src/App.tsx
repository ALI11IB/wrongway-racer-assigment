import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '"Saira", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
}

export default App;
