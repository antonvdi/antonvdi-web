import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MarketingPage from "./pages/MarketingPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import getMPTheme from "./theme/getMPTheme";
// Import other components you want to route to

function App() {
  const MPTheme = createTheme(getMPTheme("light"));

  return (
    <ThemeProvider theme={MPTheme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<MarketingPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
