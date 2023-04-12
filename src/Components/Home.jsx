import React from 'react';
import styled from "styled-components"

const Section = styled.div`
  height: 100vh;
  color: white;
  scroll-snap-align: center;
  padding-top: 20vh;
  background-image: url('./public/img/logo.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center 40%;
  background-attachment: fixed;
  @media only screen and (max-width: 820px) {
    height: 75vh;
  }
`

const Home = () => {
    return(
        <Section>
          
        </Section>
    )
}

export default Home