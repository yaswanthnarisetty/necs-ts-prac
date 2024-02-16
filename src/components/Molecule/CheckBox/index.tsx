"use client";
import React from "react";
import styled from "@emotion/styled";
import Box from "@/components/Atoms/Box";

type CustomCheckboxProps = {
  label: string;
  checked?: boolean;
  possible: boolean;
  name?: string;
  onChange?: () => void;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
};

const CheckboxContainer = styled.div<CustomCheckboxProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  width: ${(props: CustomCheckboxProps) => props.width && props.width};
  height: ${(props: CustomCheckboxProps) => props.height && props.height};
  padding: ${(props: CustomCheckboxProps) =>
    props.padding ? props.padding : 20};
  margin: ${(props: CustomCheckboxProps) => props.margin && props.margin};
  background-color: #2f2e36;
  border-radius: 10px;
`;
const Label = styled.label`
  font-size: 15px;
  font-weight: 400px;
  color: white;
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
    onChange }: CustomCheckboxProps) =>{
        const inputId = `checkbox-${label.toLowerCase().replace(/\s+/g, '-')}`;
return(
    <Box>
        <CheckboxContainer
      width={width}
      height={height}
      padding={padding}
      margin={margin}  possible={false}>
            <StyledCheckbox 
             possible={possible}
             id={inputId}
             type="checkbox"
             name={name}
             onChange={onChange}
             disabled={!possible}/>
            <Label htmlFor={inputId}>{label}</Label>
        </CheckboxContainer>
    </Box>
)
}

const StyledCheckbox = styled.input<StyledCheckboxStyles>`
  width: 16px;
  height: 16px;
  cursor: ${(props: StyledCheckboxStyles) =>
    props.possible ? "pointer" : "not-allowed"};
  background: "none";
`;

const CheckBoxInput: React.FC<CustomCheckboxProps> = ({
  label,
  checked,
  possible,
  name,
  width,
  height,
  padding,
  margin,
  onChange,
}: CustomCheckboxProps) => {
  const inputId = `checkbox-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <Box>
      <CheckboxContainer
        width={width}
        height={height}
        padding={padding}
        margin={margin}
      >
        <StyledCheckbox
          possible={possible}
          id={inputId}
          type="checkbox"
          name={name}
          onChange={onChange}
          disabled={!possible}
        />
        <Label htmlFor={inputId}>{label}</Label>
      </CheckboxContainer>
    </Box>
  );
};

export default CheckBoxInput;
