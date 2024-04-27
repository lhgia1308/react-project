import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./Theme/DarkTheme";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Routers } from "./Routers/Routers";
import { getUser } from "./State/Authentication/Action";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  // console.log("App auth", auth);

  useEffect(() => {
    dispatch(getUser({ jwt: auth.jwt || jwt, navigate, location }));
  }, [auth.jwt, dispatch, jwt]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
