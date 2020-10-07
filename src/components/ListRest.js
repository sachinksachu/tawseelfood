import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle,Breadcrumb, BreadcrumbItem,Button } from 'reactstrap';

    function RenderMenuItem ({dish}) {
        return (
            <div>
      <Card className="mb-4">
      <div className="row">
        <div className="col-5 col-sm-2 align-self-center m-auto">
        <img class="d-flex img-thumbnail " src={dish.image} />
        </div>
        <div className="col-6 col-sm-8">
        <CardBody>
        <CardTitle tag="h5">{dish.name}</CardTitle>
        <CardText>Category: {dish.category}</CardText>
        <CardText>Price: {dish.price}</CardText>
        </CardBody>
        </div>
     </div>
      </Card>
    </div>
        );
    }

export default class ListRest extends Component {
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
