import "./quote.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import QuotePage from "./pages/QuotePage";
import Quote from "./component/quote";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <QuotePage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
