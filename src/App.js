import { Provider } from "react-redux";
import store from "./store/store";
import { CssBaseline, GlobalStyles } from "@mui/material";
import Home from "./Home";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <GlobalStyles styles={{ "html, body, #root": { height: "100%" } }} />
      <Home />
    </Provider>
  );
}

export default App;
