import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";

import MarkdownPage from "./pages/markdown";
import InlinePage from "./pages/inline";
import ExternalPage from "./pages/external";

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/inline">inline</Link>
      </li>
      <li>
        <Link to="/external">external</Link>
      </li>
      <li>
        <Link to="/markdown">Markdown</Link>
      </li>
    </ul>
  );
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/markdown" component={MarkdownPage} />
          <Route path="/external" component={ExternalPage} />
          <Route path="/inline" component={InlinePage} />
        </div>
      </Router>
    );
  }
}

export default App;
