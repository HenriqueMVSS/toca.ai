import {React, useState} from 'react';
import styled from 'styled-components'

import './App.css'
import banner from './Banner.svg'



const Header = styled.header`

  margin-bottom: 10px;
  width: 100%;
  height: 270px;
  background-image:url(${banner}) ;
  background-repeat: no-repeat;
  background-position:center ;
    
`

const Logo = styled.p`
    font-weight:bold;
    color: #0f0;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 38px;
    text-align:center;
`
const Album1 = styled.div`
    width:400px;
    margin: 200px;
    display:inline;
    
`

function App() {
  return (
    <>
       <Header/>
        <hr style={{marginLeft:20, marginRight: 20}}/>
        <Logo>Toca.aí</Logo>
        <Album1>
          <img src={banner} style={{width:200, height:80}} alt=""/>
          <img src={banner} style={{width:200, height:80}} alt=""/>
          <img src={banner} style={{width:200, height:80}} alt=""/>
          <img src={banner} style={{width:200, height:80}} alt=""/>
        
        </Album1>

    </>
  );
}

export default App;
