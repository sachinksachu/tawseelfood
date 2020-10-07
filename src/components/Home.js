import React from 'react';
import {Label, Form, FormGroup, Input, Button} from 'reactstrap';

export default function Home() {
    return (
        <div>
        <div className="home-img p-4">
            <div className="container p-5">
                <Label className="home-label d-none d-sm-block">Find the best restaurants, cafe's and cuisines in Dubai</Label>
                
                <div className="row row-content m-4">
                    
                        
                        <div className="offset-sm-2 col-12 col-sm-6">
                            <input type="text" class="form-control" id="firstname" name="firstname" placeholder="First Name"/>
                            
                        </div>
                        <div className="col-12 col-sm-2" >
                            <Button type="submit " className="btn-success col-sm-12">Search</Button>
                        </div>

                    
                </div>
            </div>
        </div>

        <div className="row p-2">
            <div className="d-none d-sm-block col-sm-4">
                <img src="/1.svg" width="50px" height="65px"/>
                <Label className="m-1">Find a restaurant or cuisine</Label>
            </div>

            <div className="d-none d-sm-block col-sm-4">
            <img src="/2.svg" width="50px" height="65px"/>
                <Label className="m-1">Find a restaurant or cuisine</Label>
            </div>

            <div className="d-none d-sm-block col-sm-4">
            <img src="/3.svg" width="50px" height="65px"/>
                <Label className="m-1">Find a restaurant or cuisine</Label>
            </div>
        </div>
        </div>
    )
}
