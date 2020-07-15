import React from 'react';
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  h2 {
    text-align: center;
    margin-bottom: 20px
  }

  p {
    font-size: 16px;
    text-align: justify;
    word-spacing: 0.7px;
    line-height: 22px;
  }

  .container {
    padding: 30px;
    border: 5px dashed #e3e3e3;
  }
`;

export const TextContainer = (props) => (
	<Styles>
    <Container>
  		{props.children}
    </Container>
	</Styles>
)