import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  img {

  }

  .video-container {
    position: relative;
    padding-top: 56.25%;
  }

  .react-player {
    position: absolute;
    left: 0;
    margin-top: 30px;
  }

`;

export const MediaContainer = (props) => (
  <Styles>
    {props.children}
  </Styles>
)