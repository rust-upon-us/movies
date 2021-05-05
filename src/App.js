import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Movies from "./Movies";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Switch>
          <Route path="/terms">
            <h1>Terminos</h1>
          </Route>
          <Route path="/">
            <Movies />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
