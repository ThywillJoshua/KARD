import Home from "./pages/Home";
import NavBar from "./components/NavBar";

//Global Style
import GlobalStyles from "./components/GlobalStyles";

// //React Router
// import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <GlobalStyles />
      <Home />
    </div>
  );
}

export default App;
