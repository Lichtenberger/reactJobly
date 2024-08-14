import React from 'react'
import {NavLink} from 'react-router-dom'
import {NavItem, Nav, NavBar} from 'reactstrap'
import './Navbar.css'

const NavBar = () => {
    return (
        <div>
            <NavBar expand='md' className='bg-light'>
                <NavLink to='/' className='navbar-brand'>
                    Jobly
                </NavLink>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        <NavLink to='companies'>Companies</NavLink>
                    </NavItem>
                </Nav>
                <Nav className='ml-5'>
                    <NavItem>
                        <NavLink to='/jobs'>Jobs</NavLink>
                    </NavItem>
                </Nav>
                <Nav className='ml-5'>
                    <NavItem>
                        <NavLink to='/login'>Login</NavLink>
                    </NavItem>
                </Nav>
                <Nav className='ml-5'>
                    <NavItem>
                        <NavLink to='/signup'>Sign Up</NavLink>
                    </NavItem>
                </Nav>
            </NavBar>
        </div>
    )
}

export default NavBar