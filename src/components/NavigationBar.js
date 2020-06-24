import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import logo from '../spikeboys_logo.png'

const Styles = styled.div`
	.navbar{
		background-color: #e3e3e3;
		height: ;
	}

	a, .navbar-brand, .navbar-nav .nav-link {
		color #222222;

		img{
			width: auto;
			max-height: 52px;
			position: absolute;
			top: 2px;
			left: 12px;
		}

		&:hover {
			color: #767676;
		}
	}
`;

export const NavigationBar = () => (
	<Styles>
		<Navbar expand="lg">
			<Navbar.Brand href="/">
				<a href="/">
          <img src={logo} 
          alt="Spike Boys Logo"
          />
        </a>
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