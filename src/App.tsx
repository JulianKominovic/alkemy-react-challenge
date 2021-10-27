import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { AuthProvider } from "./context/AuthContext";
import { HeroesListProvider } from "./context/HeroesListContext";
import Search from "./pages/Search";
import Details from "./pages/Details";

function App() {
  return (
    <AuthProvider>
      <HeroesListProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/search/:name?" component={Search} />
            <Route exact path="/details/:id" component={Details} />
          </Switch>
        </Router>
      </HeroesListProvider>
    </AuthProvider>
  );
}

export default App;
