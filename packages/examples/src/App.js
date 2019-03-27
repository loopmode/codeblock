import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import HookPage from './pages/hook';
import InlinePage from './pages/inline';
import ExternalPage from './pages/external';
import ThemesPage from './pages/themes';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <h1>@loopmode/codeblock examples</h1>
                    <nav>
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
                                <Link to="/hook">usePrism hook</Link>
                            </li>
                            <li>
                                <Link to="/themes">Themes</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route path="/hook" component={HookPage} />
                    <Route path="/external" component={ExternalPage} />
                    <Route path="/inline" component={InlinePage} />
                    <Route path="/themes" component={ThemesPage} />
                </div>
            </Router>
        );
    }
}

export default App;
