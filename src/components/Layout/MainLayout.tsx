import React, { ReactNode } from 'react'

import styled from '@emotion/styled';
import Text from '../Atoms/Text';

type MainLayoutProps={
    background?:string,
    childern?:ReactNode,
}


 const MainLayout:React.FC<MainLayoutProps>=(props)=> {


    const BackgroundContainer = styled.div`
    height:100vh;
  
    min-width: 300px;
    padding:10px;
    background:${(props:MainLayoutProps) =>props.background||"#2f2e36"};
    border-radius:10px;
    
    
    `;

const ChildContainer=styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    margin:auto;
    max-width:90%
    `;
const StyledText=styled.h1`
font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
  letter-spacing: 0.6rem;
  margin: 0;
  text-transform: uppercase;
  background: linear-gradient(90deg, #e781fb 40%, #8e76fa 60%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`


  return (
    <BackgroundContainer>
        {/* <StyledText fontSize='25px'   mt='40px' mb='40px' ml="50px" >todo</StyledText> */}
        <StyledText>todo</StyledText>
        <ChildContainer>
            {props?.childern}

        </ChildContainer>
    </BackgroundContainer>
  )
}

export default MainLayout