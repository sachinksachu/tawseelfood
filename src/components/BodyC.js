import React, {Component} from 'react'
import HomeListRest from './HomeListRest'
import { DISHES } from '../shared/dishes';

export default class Body extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES
          };
    }
    render(){
        return (
            <div className="container mt-2 mb-2">
                <div className="row">
                    <div className="col-9">
                        <div className="row m-2">
                            <img src='assets/images/SLIDER1593939189.jpeg'/>
                        </div>
    
                        <div className="row m-2">
                            <img src="assets/images/SLIDER1598270694.jpeg"/>
                        </div>
    
                        <div className="row m-2">
                        <img src="assets/images/SLIDER1600691639.jpeg"/>
                        </div>
    
                        <div className="row m-2">
                        <img src="assets/images/SLIDER1600691695.jpeg"/>
                        </div>
                    </div>
    
                    <div className="col-3">
                        <HomeListRest dish={this.state.dishes}/>
                    </div>
                </div>
            </div>
        )
    }
    
}
