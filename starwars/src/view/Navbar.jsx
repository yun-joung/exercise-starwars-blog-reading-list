import React from 'react';
import { logo } from '../Components/image/image.js';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Context } from "../store/appContext";
import { Link } from 'react-router-dom';
import '../App.css'
import '../style/index.scss'

const Menu = () => {
const { store, actions } = React.useContext(Context);
    console.log(store.favorites)

    return (
            <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" className="text-white" style={{ background: 'black', height:'100px' }} >
            <div className="container">
                <Navbar.Brand href="/"style={{ margin: '0' }} />
                <Link to="/" >
                        <img
                            src={logo}
                            width="85"
                            height="55"
                            className="d-inline-block align-top"
                            alt="Starwars logo"
                            position="absolute"
                            top="50px"

                        />
                    </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                    <NavDropdown title="Favorites   " id="collasible-nav-dropdown" menualign="left">
                        {store.favorites.map((item,index) => { 
                        return(
                        <NavDropdown.Item href="#action/3.1" key={index}>
                            {item}
                            <Button variant="btn btn btn-outline-dark float-right" style={{border:'0'}}
                            onClick ={()=> actions.eliminarLista(item)}>
                            < i className="fas fa-trash-alt float-right">
                            </i></Button>
                        </NavDropdown.Item>)
                    })}
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
    )
};

export default Menu
