import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
	.navbar{
		background-color: #e3e3e3;
	}

	a, .navbar-brand, .navbar-nav .nav-link {
		color #222222;

		&:hover {
			color: #767676;
		}
	}
`;

export const NavigationBar = () => (
	<Styles>
		<Navbar expand="lg">
			<Navbar.Brand href="/">
	      <img
	        src="../assets/spikeboys_logo.png"
	        className="d-inline-block align-top"
	        alt="Spike Boys Logo"
	      />
	    </Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="m-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link to="/contact">Contact</Link>
            </Nav.Link>
          </Nav.Item>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	</Styles>
)