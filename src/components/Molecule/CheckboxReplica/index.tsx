import Box from '@/components/Atoms/Box'
import Text from '@/components/Atoms/Text'
import React, { useEffect, useState } from 'react'
import { CheckCircle2, Circle, CopyX, Pencil, Star, Trash2 } from 'lucide-react';
import { TodoData } from '@/app/page';
import styled from "@emotion/styled"
import { useLazyQuery } from '@/app/hooks';
import { serverFetch } from '@/app/actions';
type CheckBoxReplicaProps={
    label?:string;
    stared?:boolean;
    onChange?: () => void;
    width?: string;
    height?: string;
    padding?: number;
    margin?: string;
    id?: string;
    completed?: boolean;
    allTodoData?: TodoData[]
    setAllTodoData: Function
    status?:string;
}
function CheckBoxReplica({...props}:CheckBoxReplicaProps) {

    const [updataTodo, { data, loading, error }] = useLazyQuery(serverFetch)
    const [updateConfirmed, respupdateConfirmed] = useLazyQuery(serverFetch)
    const [deleteTodo, respdeleteTodo] = useLazyQuery(serverFetch)

    const [isHovered, setIsHovered] = useState(false);
    const StyledBox =styled(Box)<CheckBoxReplicaProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    gap:20px ;
    border-radius:10px;
    align-items: center;
    text-align: center;
    background-color: #2f2e36;
          `
          const StyledText =styled(Text)<CheckBoxReplicaProps>`
   font-size:20px;
   color:white;
   text-decoration: ${(props: CheckBoxReplicaProps) => (props?.completed ? "line-through" : "none")};

          `


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
                    id:props?.id,
                    star: !props?.stared
                }
            }
            )
        }
        useEffect(() => {
            if (data) {
                props?.setAllTodoData(props?.allTodoData?.map((item: TodoData) => {
                    if (item?.id === props?.id) {
                        item.star = !props?.stared
    
                    }
                    return item;
                }))
            }
        }, [data, error])

        function updateConfirmedStatus(id: string, status: string ) {
            let UpdateStatus: string
            if (status == "Completed") {
              UpdateStatus = "InComplete"
            }
            else {
              UpdateStatus = "Completed"
        
            }
            updateConfirmed(
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
              input: {
                id,
                status: UpdateStatus
              }
            }
            )
          }
          useEffect(() => {
            let UpdateStatus: string
            if (props?.status == "Completed") {
              UpdateStatus = "InComplete"
            }
            else {
              UpdateStatus = "Completed"
        
            }
            if (respupdateConfirmed?.data) {
                props?.setAllTodoData(props?.allTodoData?.map((item: TodoData) => {
                    if (item?.id === props?.id) {
                        item.status = UpdateStatus
    
                    }
                    return item;
                }))
            }
        
          }, [respupdateConfirmed?.data, respupdateConfirmed?.error])


          function DeleteTodo() {
            deleteTodo(
                `
                mutation Mutation($deleteTodoId: ID!) {
                    deleteTodo(id: $deleteTodoId)
                  }`,{
                    "deleteTodoId": props?.id
                  }
            )
        // const deletTodo = (id: number) => {
        //     console.log("hlo");
        //     const updatedArray: any = props?.allTodoData.filter((item: any) => item.id !== id);
        //     props?.setAllTodoData(updatedArray);
        //   };

        }
        useEffect(()=>{
            if(respdeleteTodo?.data){
            const updatedArray: any = props?.allTodoData?.filter((item: any) => item.id !== props?.id);
            props?.setAllTodoData(updatedArray);

            }

        },[respdeleteTodo?.data,respdeleteTodo?.loading,respdeleteTodo?.error])
  return (
    <StyledBox height={`${props?.height}`}  onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)} >
      <Box width="100px">
        {props?.completed
      ?<CheckCircle2 size={24} color="#079c20" strokeWidth={3} onClick={()=>updateConfirmedStatus(props?.id!,props?.status!)}/>
      :<Circle size={24} color="#9a9898" strokeWidth={3} onClick={()=>updateConfirmedStatus(props?.id!,props?.status!)}/>}
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="center" textAlign="center" alignItems="center">
      <StyledText textAlign="center" completed= {props?.completed}>
        {props?.label}
      </StyledText>

      </Box>
      <Box width="100px" display="flex" flexDirection="row" alignItems="end" gap="10px">
        {isHovered&&<Box display="flex" flexDirection="row" alignItems="end" gap="10px">
        <Trash2 size={15} color="#9a9898" strokeWidth={3} onClick={()=>DeleteTodo()}/>

            <Pencil size={15} color="#9a9898" strokeWidth={3} />
            </Box>}
      {props?.stared ? <Star fill='yellow' color='#2f2e36' onClick={() => Starrded()} /> : <Star color="#9a9898" onClick={() => Starrded()} />
                }
      </Box>
    </StyledBox>
  )
}

export default CheckBoxReplica
//onClick={() => Starrded()} 