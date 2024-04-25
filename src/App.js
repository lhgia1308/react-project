import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./Theme/DarkTheme";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Routers } from "./Routers/Routers";
import { getUser } from "./State/Authentication/Action";

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  // console.log("App auth", auth);
  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
  }, [auth.jwt, dispatch, jwt]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
