import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import styled from 'styled-components'
import spikeImage from '../assets/spike.jpg';

const Styles = styled.div`
	.jumbo {
		background: url(${spikeImage}) no-repeat fixed bottom;
		background-size: cover;
		color: #efefef;
		height: 200px;
		position: relative;
		z-index: -2;
	}

	.overlay {
		background-color: #000;
		opacity: 0.2;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
	}`;

export const Jumbotron = () => (
	<Styles>
		<Jumbo fluid className="jumbo">
			<div className="overlay"></div>
			<Container>
				<h1>Spike Boys</h1>
				<p>SpikeBall aktiviiteettia ja kamaa ostettavaksi!</p>
			</Container>
		</Jumbo>
	</Styles>
)