"use client"
import React, { useEffect, useLayoutEffect } from 'react'
import styled from '@emotion/styled';
import Box from '@/components/Atoms/Box';
import { Star } from 'lucide-react';
import { useLazyQuery } from '@/app/hooks';
import { serverFetch } from '@/app/actions';
import { TodoData } from '@/app/page';
type CustomCheckboxProps = {
  label: string;
  checked?: boolean;
  possible: boolean;
  name?: string;
  onChange?: () => void;
  width?: string;
  height?: string;
  padding?: number;
  margin?: string;
  id?: string;
  completed?: boolean;
  stareed?: boolean;
  allTodoData?: TodoData[]
  setAllTodoData?: Function
};

const CheckboxContainer = styled.div<CustomCheckboxProps>`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items: center;
  gap: 10px;
  width:${(props: CustomCheckboxProps) => props.width ? props.width : `auto`};
  height:${(props: CustomCheckboxProps) => props.height && props.height};
  padding:${(props: CustomCheckboxProps) => props.padding ? props.padding : 5}px;
  margin:${(props: CustomCheckboxProps) => props.margin && props.margin};
  background-color:#2f2e36;
  border-radius:10px;
`;
const Label = styled.label<CustomCheckboxProps>`
 font-size:18px;
 font-weight:400px;
 color:white;
 text-decoration: ${(props: CustomCheckboxProps) => (props.completed ? "line-through" : "none")};

`;

interface StyledCheckboxStyles {
  possible: boolean;
}

const StyledCheckbox = styled.input<StyledCheckboxStyles>`
    width: 16px;
    height: 16px;
    cursor: ${(props: StyledCheckboxStyles) => (props.possible ? "pointer" : "not-allowed")}; 
    background: "none";
  `;

const CheckBoxInput: React.FC<CustomCheckboxProps> = ({ label,
  checked,
  possible,
  name,
  width,
  height,
  padding,
  margin,
  id,
  completed,
  stareed,
  allTodoData,
  setAllTodoData,
  onChange }: CustomCheckboxProps) => {
  const inputId = `checkbox-${label.toLowerCase().replace(/\s+/g, '-')}`;

  const [updataTodo, { data, loading, error }] = useLazyQuery(serverFetch)

  function Starrded() {
    updataTodo(
      `
    mutation Mutation($input: updateTodoInput!) {
        updateTodo(input: $input) {
          id
          text
          status
          star
          createdOn
          updatedOn
        }
      }`, {
      "input": {
        id,
        star: !stareed
      }
    }
    )
  }
  useEffect(() => {
    if (data) {
      if (typeof setAllTodoData === "function")
        setAllTodoData(allTodoData?.map((item: TodoData) => {
          if (item?.id === id) {
            item.star = !stareed

          }
          return item;
        }))
    }
  }, [data, error])
  return (
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
        {stareed ? <Star fill='yellow' color='#2f2e36' onClick={() => Starrded()} cursor="pointer" />
          : <Star color="#eef6f5" onClick={() => Starrded()} cursor="pointer" />
        }
      </CheckboxContainer>
    </Box>
  )
}



export default CheckBoxInput;
