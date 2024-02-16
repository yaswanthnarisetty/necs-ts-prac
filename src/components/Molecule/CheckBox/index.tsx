"use client"
import React from 'react'
import styled from '@emotion/styled';
import Box from '@/components/Atoms/Box';
import { Star } from 'lucide-react';
type CustomCheckboxProps = {
    label: string;
    checked?: boolean;
    possible: boolean;
    name?: string;
    onChange?: () => void;
    width?:string;
    height?:string;
    padding?:number;
    margin?:string;
    id?:string;
    completed?:boolean;
};

const CheckboxContainer = styled.div<CustomCheckboxProps>`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items: center;
  gap: 10px;
  width:${(props:CustomCheckboxProps)=>props.width&& props.width};
  height:${(props:CustomCheckboxProps)=>props.height &&props.height};
  padding:${(props:CustomCheckboxProps)=>props.padding? props.padding:5}px;
  margin:${(props:CustomCheckboxProps)=>props.margin&& props.margin};
  background-color:#2f2e36;
  border-radius:10px;
`;
const Label = styled.label<CustomCheckboxProps>`
 font-size:18px;
 font-weight:400px;
 color:white;
 text-decoration: ${(props:CustomCheckboxProps) => (props.completed ? "line-through" : "none")};

`;

interface StyledCheckboxStyles {
    possible: boolean;
  }
  
  const StyledCheckbox = styled.input<StyledCheckboxStyles>`
    width: 16px;
    height: 16px;
    cursor: ${(props:StyledCheckboxStyles) => (props.possible ? "pointer" : "not-allowed")}; 
    background: "none";
  `;

const CheckBoxInput : React.FC<CustomCheckboxProps>=({ label,
    checked,
    possible,
    name,
    width,
    height,
    padding,
    margin,
    id,
    completed,
    onChange }: CustomCheckboxProps) =>{
        const inputId = `checkbox-${label.toLowerCase().replace(/\s+/g, '-')}`;
return(
    <Box>
        <CheckboxContainer
      width={width}
      height={height}
      padding={padding}
      margin={margin} label={''} possible={false}>
        <Box display="flex" flexDirection="row" alignItems="center" gap="20px">
            <StyledCheckbox 
             possible={possible}
             id={inputId}
             type="checkbox"
             name={name}
             onChange={onChange}
             disabled={!possible} />
            <Label htmlFor={inputId} completed={completed} label={''} possible={false}>{label}</Label>
            </Box>
            {id?<Star fill='yellow' color='#2f2e36' />:<Star color="#eef6f5" />
}
        </CheckboxContainer>
    </Box>
)
}



export default CheckBoxInput;
