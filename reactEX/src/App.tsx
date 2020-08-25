import React from 'react';
import './App.css';
import App1 from './App1';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import EventApp from './eventEX/EventApp';
import EventApp2 from './eventEX2/EventApp';

// 기본
//* 정보
//! 경고
//? 질문
//TODO TODO
//
/**
 *
 * @param a
 */
function App() {
    return (
        <Router>
            <div className='App'>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/eventApp1'>eventApp1</Link>
                        </li>
                        <li>
                            <Link to='/eventApp2'>eventApp2</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/eventApp1'>
                        <EventApp />
                    </Route>
                    <Route path='/eventApp2'>
                        <EventApp2 />
                    </Route>
                    <Route path='/'>
                        <App1 />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
export default App;
