import React, { Component } from 'react'
import {Form, Button, Input} from 'reactstrap'


export default class Footer extends Component {
    render() {
        return (
            <div>
            <div className="search-text p-4 d-none d-sm-block">
            <div className="row "> 
		    <div className="col-lg-12 col-sm-2 col-xs-12 hidden-sm hidden-xs">	 
            <div className="form">
           <h4 className="text-white">Be the first to know our exclusive Offers</h4>
            <Form className="row">
            <div className="offset-sm-2 col-12 col-sm-6 mb-2">
                            <input type="text" class="form-control" id="firstname" name="firstname" placeholder="Email Address"/>
                            
                        </div>
                        <div className="col-12 col-sm-2" >
                            <Button type="submit " className="btn-primary col-sm-12">Submit</Button>
                        </div>
            </Form>
        </div>
        </div>

		<div className="col-lg1-12 col-md-6 col-lg-12 hidden-sm hidden-xs text-center">
		   
			  <ul className="d-flex justify-content-around p-4 border-top">
				 <li><a href="https://www.tawseelfood.com/terms">Terms and Conditions</a></li>
				 <li><a href="https://www.tawseelfood.com/privacy-policy">Privacy</a></li>
				 <li><a href="https://www.tawseelfood.com/faq">FAQ</a></li>
				 <li><a href="https://www.tawseelfood.com/contact">Conatct Us</a></li>
				 <li><a href="https://www.tawseelfood.com/sitemap">Sitemap</a></li>
			  </ul>
		   
		</div>
      </div>         
   </div>     
            <div className="footer p-4">
                <div className="container">
                <div className="row">

                    <div className="col-12 col-sm-3 text-left">
                    <h4 className="text-warning">Restaurants</h4>
                    <ul class="list-unstyled">

                        <li><a href="https://www.tawseelfood.com/dubai/hot-n-spicy">Hot n Spicy</a></li>
                        <li><a href="https://www.tawseelfood.com/dubai/reef-demashq">Reef Demashq</a></li>
                        <li><a href="https://www.tawseelfood.com/dubai/barbecue-adda">Barbecue Adda</a></li>
                        <li><a href="https://www.tawseelfood.com/dubai/shawarma-house">Shawarma House</a></li>
                        <li><a href="https://www.tawseelfood.com/dubai/duomo-di-milano-restaurant">Duomo di Milano</a></li>
                    </ul>
                    </div>

                    <div className="col-12 col-sm-3 text-left">
                    
                        <h4 className="text-warning">Popular Cuisines</h4>
                        <ul class="list-unstyled">
                        <li><a href="https://www.tawseelfood.com/dubai/fast-food-restaurants-near-me">Fast Food</a></li><li><a href="https://www.tawseelfood.com/dubai/middle-eastern-restaurants-near-me">Middle Eastern</a></li><li><a href="https://www.tawseelfood.com/dubai/arabic-food-restaurants-near-me">Arabic Food</a></li><li><a href="https://www.tawseelfood.com/dubai/arabic-food-restaurants-near-me">Arabic Food</a></li><li><a href="https://www.tawseelfood.com/dubai/pizza-restaurants-near-me">Pizza</a></li>				
                        </ul>
                    </div>

                    <div className="col-12 col-sm-3 text-left">
                    
			            <h4 className="text-warning">Popular Areas</h4>
                        <ul class="list-unstyled">
			             <li><a href="https://www.tawseelfood.com/dubai/abu-hail-restaurants">Abu Hail</a></li>
			               <li><a href="https://www.tawseelfood.com/dubai/al-barsha-restaurants">Al Barsha</a></li>
			               <li><a href="https://www.tawseelfood.com/dubai/al-barsha-south-restaurants">Al Barsha South</a></li>
			               <li><a href="https://www.tawseelfood.com/dubai/al-karama-restaurants">Al Karama</a></li>
			               <li><a href="https://www.tawseelfood.com/dubai/al-khabaisi-restaurants">Al Khabaisi</a></li>
			              </ul>
                    
                    </div>

                    <div className="col-12 col-sm-3 text-left">
                    <h4 className="text-warning">Follow Us</h4>
                    <div>
                    <ul class="list-unstyled list-group  list-group-horizontal ml-auto d-flex justify-content-between">
                    <li><a href="https://www.facebook.com/TawseelFood/" ><i class="fa fa-facebook "></i></a></li>              
                    <li><a href="https://www.instagram.com/tawseelfood/" ><i class="fa fa-instagram  "></i></a></li>
			        <li><a href="https://www.linkedin.com/company/tawseel-food-delivery-service" ><i class="fa fa-linkedin  "></i></a></li>
			        <li><a href="https://twitter.com/TawseelFood" ><i class="fa fa-twitter  "></i></a></li>              
                    <li><a href="https://www.pinterest.com/tawseelfood/"><i class="fa fa-pinterest "></i></a></li>
                    </ul>
                    </div>
                    <h4 className="text-white text-bold">DOWNLAOD APP</h4>
                    <div className="row ">
                    
                    <div className="col-6 col-sm-4">
                        
                            <span class="apple-store app">
					            <a href="https://apps.apple.com/in/app/apple-store/id375380948" target="_blank"></a>
						        <img className="d-flex img-thumbnail " alt="Tawseelfood IOS App" src="https://www.tawseelfood.com/images/iosapp.png"/>
				            </span>
                    </div>

                    <div className="col-6 col-sm-4">
                    <span class="android-store app">
					<a href="https://play.google.com/store/search?q=tawseelFood&amp;c=apps" target="_blank">
						<img className="d-flex img-thumbnail " alt="Tawseelfood android Store App" src="https://www.tawseelfood.com/images/andapp.png"/>
					</a>
				    </span>
                    </div>

                    </div>

                    </div>



                </div>
                </div>
                <div class="row justify-content-center border-top mt-2">             
                <div class="col-auto text-white mt-2">
                    <p>© 2020 TawseelFood App All Rights Reserved </p>
                </div>
           </div>
            </div>
            </div>
        )
    }
}
