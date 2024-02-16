"use client";
import Box from "@/components/Atoms/Box";
import MainLayout from "@/components/Layout/MainLayout";
import CheckBoxInput from "@/components/Molecule/CheckBox";
import InputButton from "@/components/Molecule/InputButton";
import SideBar from "@/components/Molecule/SideBar";
import SideBarItem from "@/components/Molecule/SideBarItem";
import { ClipboardCheck, Star } from 'lucide-react';
import { FormEvent, ReactElement, useEffect, useState } from "react";
import { useLazyQuery } from "./hooks";
import { serverFetch } from "./actions";
export type TodoData = {
  id: string;
  status: string;
  star: boolean;
  text: string;
  createdOn?: string;
  updatedOn?: string;
}
export default function Home() {
  const [selectedpage, setSelectedpage] = useState<string>("ALL")
  const [allTodoData, setAllTodoData] = useState<TodoData[]>([]);
  const [getAllTodos, { data, loading, error }] = useLazyQuery(serverFetch)
  const [updateConfirmed, respupdateConfirmed ] = useLazyQuery(serverFetch)


  type sideBarItemProp = {
    name: string;
    icon: ReactElement;
    active: boolean;
  };

  const [sideBarItems, setSideBarItems] = useState<sideBarItemProp[]>([
    {
      name: "All",
      icon: <ClipboardCheck size={16} color="#000" />,
      active: true,
    },
    {
      name: "Starred",
      icon: <Star fill="#000" size={16} color="#000" />,
      active: false
    }
  ])



  const [todo, setTodo] = useState<string>("");
  const [addTodo, addTodoResponse] = useLazyQuery(serverFetch);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!todo) {
      alert("Add some Task!!");
      return;
    }
    addTodo(`
    mutation CreateTodo($input: TodoInput!) {
      createTodo(input: $input) {
        id
        text
        status
        star
        createdOn
        updatedOn
      }
    }`,
      {
        "input": {
          "star": false,
          "status": "InComplete",
          "text": todo
        }
      },
      {
        cache: "no-store"
      }
    )
  }

  useEffect(() => {
    if (addTodoResponse.data) {
      setAllTodoData([...allTodoData, addTodoResponse.data?.createTodo])
    }
  }, [addTodoResponse.data, addTodoResponse.error])

  useEffect(() => {
    getAllTodos(
      `
      query ListTodos($limit: Int!) {
        listTodos(limit: $limit) {
          docs {
            id
            text
            status
            star
            createdOn
            updatedOn
          }
        }
      }
      `,
      {
        limit: 20
      },
      {
        cache: "no-store"
      }
    )
  }, [])
  useEffect(() => {
    if (data) {
      // console.log(data?.listTodos?.docs,"data")
      setAllTodoData(data?.listTodos?.docs)
    }
    if (error) {
      console.log(error, "error")

    }
  }, [data, loading, error])

function updateConfirmedStatus({id,status}:{id:string,status:string}){
  let UpdateStatus:string
  if(status=="Completed"){
    UpdateStatus ="InComplete"
  }
  else{
    UpdateStatus ="Completed"

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
      }`,{
      input:{
        id,
        status:UpdateStatus

      }
    }
  )
}
  return (
    <main>
      <MainLayout>
        {/* <CheckBoxInput label="testing" possible={true} />
        <InputButton />
        {sideBarItems.map((item: sideBarItemProp) => <SideBarItem active={item.active} itemName={item.name} itemIcon={item.icon} />)} */}
        <Box
          style={{
            display: "grid",
            gridTemplateColumns: "30% 70%",
            gap: "30px",
            margin: "10px 5%",
          }}
        >
          <SideBar title={"Filters"} height={"300px"}>
            <Box display="flex" justifyContent="flex-start" flexDirection="column" gap="15px" >
              {sideBarItems.map((item: sideBarItemProp, index: number) => <SideBarItem key={index} active={item.active} itemName={item.name} itemIcon={item.icon} />)}
            </Box>
          </SideBar>
          <SideBar title={selectedpage == "ALL" ? "Tasks" : "Starred"} height={"300px"}>
            {selectedpage == "ALL" ? <Box>
              <InputButton todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
              {allTodoData?.length > 0 &&
                <Box display="flex" flexDirection="column" gap="20px">
                  {allTodoData.map((item: TodoData) => {
                    return (
                      <Box key={item?.id} >
                        <CheckBoxInput allTodoData={allTodoData} setAllTodoData={setAllTodoData} label={item?.text} possible={true} width="300px" id={item?.id} stareed={item?.star} onChange={()=>updateConfirmedStatus({id:item?.id,status:item?.status})}/>

                      </Box>
                    )
                  })}
                </Box>}
            </Box> : <></>}

          </SideBar>
        </Box>
      </MainLayout>
    </main>
  );
}
