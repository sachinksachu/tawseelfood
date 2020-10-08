import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import { DISHES } from '../shared/dishes';
import ListRest from './ListRest';
export default class Restaurant extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES
          };

    }
    render() {
        return (
            <div>
                
                <div>
                    <div className="row">
                        <div className="col-sm-3">

                        </div>

                        <div className="col-sm-6">
                            <ListRest dish={this.state.dishes}/>
                        </div>

                        <div className="col-sm-3">
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
