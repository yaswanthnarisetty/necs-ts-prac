import React, { ReactElement, ReactNode } from 'react'

import styled from '@emotion/styled';
import Box from '../Atoms/Box';
type MainLayoutProps = {
  background?: string,
  children: ReactNode
}


const MainLayout: React.FC<MainLayoutProps> = (props) => {


  const BackgroundContainer = styled.div`
    height:100vh;
    min-width: 300px;
    background: rgb(237,255,245);
    background: linear-gradient(47deg, rgba(237,255,245,1) 0%, rgba(255,255,255,1) 50%, rgba(238,228,247,1) 100%);
    border-radius:10px;
    `;


  const StyledText = styled.h1`
font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
  letter-spacing: 0.6rem;
  margin: 0;
  color:#7b61da
`


  return (
    <BackgroundContainer>
      <Box padding='50px 100px'>
        <StyledText ><span style={{ color: '#000' }}>to</span>do.</StyledText>
        {props.children}
      </Box>
    </BackgroundContainer >
  )
}

export default MainLayout