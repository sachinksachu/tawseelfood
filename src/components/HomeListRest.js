import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle,Breadcrumb, BreadcrumbItem,Button } from 'reactstrap';

    function RenderMenuItem ({dish}) {
        return (
        
            <div className="container">
            <Card>
              <CardImg top src={dish.image} alt="Card image cap" />
              <CardBody>
            <CardTitle>{dish.name}</CardTitle>
                
                <CardText>{dish.category}</CardText>
                <CardText>{dish.price}</CardText>
              </CardBody>
            </Card>
          </div>
    
        );
    }

export default class HomeListRest extends Component {
    constructor(props){
        super(props);
    }

   
    render() {
        const menu = this.props.dish.map((dish) => {
            return (
              <div className="col-12 col-md-12 m-1"  key={dish.id}>
                    <RenderMenuItem dish={dish}/>
                </div>
            );
        });
        return (
            <div>
                <div className="container">
                <div className="row">
                    {menu}
                </div>
                
            </div>
            </div>
        )
    }
}
