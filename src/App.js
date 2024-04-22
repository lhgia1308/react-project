import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./Theme/DarkTheme";
import { Navbar } from "./component/Navbar/Navbar";
import { Home } from "./component/Home/Home";
import { StoreDetail } from "./component/Store/StoreDetail";
import { Cart } from "./component/Cart/Cart";
import { Profile } from "./component/Profile/Profile";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      {/* <Home /> */}
      {/* <StoreDetail /> */}
      {/* <Cart /> */}
      <Profile />
    </ThemeProvider>
  );
}

export default App;
