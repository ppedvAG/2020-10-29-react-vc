import React from 'react';
import {
    BrowserRouter as Router, Switch, Route, Link
} from 'react-router-dom';
import App from '../App';
import Greeter from '../Greeter';
import Rating from '../Rating';

/* die Komponente ist nicht angeschlossen, Router findet sich in der index.tsx */
export default function Home() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        {/* <li><Link to="/">Home</Link></li> */}
                        
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/app">Sample App</Link></li>
                        <li><Link to="/greeter">Greeater</Link></li>
                        <li><Link to="/rating">Rating</Link></li>
                    </ul>
                </nav>

                <Switch>
                    {/* todo #4 */}
                    <Route exact path="/" component={Home}>
                        <Home />
                    </Route>
                    <Route exact path="/app" component={App}>
                        <App />
                    </Route>
                    <Route path="/greeter">
                        <Greeter />
                    </Route>
                    <Route path="/rating">
                        <Rating />
                    </Route>
                    <Route exact path="/home" component={Home}></Route>
                </Switch>
            </div>
        </Router>
    )
}

