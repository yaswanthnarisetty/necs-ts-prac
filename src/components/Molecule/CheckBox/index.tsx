"use client"
import React from 'react'
import styled from '@emotion/styled';

type CustomCheckboxProps = {
    label: string;
    checked?: boolean;
    possible: boolean;
    name?: string;
    onChange?: () => void;
};

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 300px;
  padding:10px;
  background-color:#2f2e36;
  border-radius:10px;
`;
const Label = styled.label`
 font-size:15px;
 font-weight:400px;
 color:white;
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
    onChange }: CustomCheckboxProps) =>{
        const inputId = `checkbox-${label.toLowerCase().replace(/\s+/g, '-')}`;
return(
    <div>
        <CheckboxContainer>
            <StyledCheckbox 
             possible={possible}
             id={inputId}
             type="checkbox"
             name={name}
             onChange={onChange}
             disabled={!possible}/>
            <Label htmlFor={inputId}>{label}</Label>
        </CheckboxContainer>
    </div>
)
}

export default CheckBoxInput

