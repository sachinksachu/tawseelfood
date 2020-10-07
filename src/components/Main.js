import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';
import Restaurant from './Restaurant';

class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/restaurant" component={Restaurant}/>
                </Switch>
        
            </div>
        )
    }
}

export default Main;