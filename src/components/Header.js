import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Label,
    Button
  } from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component {
    constructor(props){
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        
        this.state = {
            isNavOpen: false
          };
        }
  
        toggleNav() {
          this.setState({
            isNavOpen: !this.state.isNavOpen
          });
        }
    
    render() {
        return (
      <div className="">
      <Navbar className="home-head" dark expand="md">
        <div className="container ">
        
        <NavbarBrand className="mr-auto" href="/">
            <img src='assets/images/logo.png' height="50" width="135" alt='Tawseel food' />
        </NavbarBrand>

        <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
                <Nav className="float-left" navbar>
                    <NavItem className="p-2">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                    </NavItem>
                    
                    <NavItem className="p-2">
                        <NavLink className="nav-link" to="https://github.com/reactstrap/reactstrap">Offers</NavLink>
                    </NavItem>

                    <NavItem className="p-2">
                        <NavLink className="nav-link" to="/components/">Blog</NavLink>
                    </NavItem>
                    
                    <NavItem className="p-2">
                        <NavLink className="nav-link" to="/restaurant">All Restaurants</NavLink>
                    </NavItem>

                    <NavItem className="p-2">
                        <NavLink className="nav-link" to="/components/">Register with Us</NavLink>
                    </NavItem>
                    
                    <NavItem className="p-2">
                        <NavLink className="nav-link" to="https://github.com/reactstrap/reactstrap">Login</NavLink>
                    </NavItem>

                    <UncontrolledDropdown className="p-2" nav inNavbar>
                    <DropdownToggle nav caret>More</DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Option 1
                            </DropdownItem>

                            <DropdownItem>
                                 Option 2
                            </DropdownItem>

                            <DropdownItem divider />
                            <DropdownItem>
                                Reset
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem className="p-2">
                        <NavLink className="nav-link" to="/components/">Cart</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </div>
      </Navbar>
      <div>
        <div className="home-img p-4">
            <div className="container p-5">
                <Label className="home-label d-none d-sm-block">Find the best restaurants, cafe's and cuisines in Dubai</Label>
                
                <div className="row row-content m-4">
                    
                        
                        <div className="offset-sm-2 col-12 col-sm-6 m-2">
                            <input type="text" class="form-control" id="firstname" name="firstname" placeholder="Select your area"/>
                            
                        </div>
                        <div className="col-12 col-sm-2 m-2" >
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
    </div>
        )
    }
}

export default Header;