import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Home from "./pages/Home";
import { store } from "./rtk/store";
import { Provider } from "react-redux";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: '"Saira", "Roboto", "Helvetica", "Arial", sans-serif',
    },
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
