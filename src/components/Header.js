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
    NavbarText
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
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink className="nav-link" to="https://github.com/reactstrap/reactstrap">Offers</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className="nav-link" to="/components/">Blog</NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink className="nav-link" to="/restaurant">All Restaurants</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className="nav-link" to="/components/">Register with Us</NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink className="nav-link" to="https://github.com/reactstrap/reactstrap">Login</NavLink>
                    </NavItem>

                    <UncontrolledDropdown nav inNavbar>
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
                    <NavItem>
                        <NavLink className="nav-link" to="/components/">Cart</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </div>
      </Navbar>
    </div>
        )
    }
}

export default Header;