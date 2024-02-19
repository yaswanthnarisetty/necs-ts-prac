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
import CheckBoxReplica from "@/components/Molecule/CheckboxReplica";
export const sideBarItems = [
  {
    name: "All",
    icon: <ClipboardCheck size={16} color="#000" />
  },
  {
    name: "Starred",
    icon: <Star fill="#000" size={16} color="#000" />
  }
]
export type TodoData = {
  id: string;
  status: string;
  star: boolean;
  text: string;
  createdOn?: string;
  updatedOn?: string;
}
const datata: TodoData[] = [
  {
    id: "123",
    status: "Completed",
    star: true,
    text: "testing",
  }, {
    id: "1234",
    status: "",
    star: true,
    text: "testing",
  }
]
export default function Home() {
  const [selectedpage, setSelectedpage] = useState<string>("ALL")
  const [allTodoData, setAllTodoData] = useState<TodoData[]>([]);
  const [getAllTodos, { data, loading, error }] = useLazyQuery(serverFetch)
  const [updateConfirmed, respupdateConfirmed] = useLazyQuery(serverFetch)


  type sideBarItemProp = {
    name: string;
    icon: ReactElement;
  };




  const [todo, setTodo] = useState<string>("");
  const [addTodo, addTodoResponse] = useLazyQuery(serverFetch);
  const [updateTodo, updateTodoResponse] = useLazyQuery(serverFetch);
  const [currentAction, setCurrentAction] = useState<'ADD' | 'UPDATE'>("ADD");
  const [currentId, setCurrentId] = useState<string>('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!todo) {
      alert("Add some Task!!");
      return;
    }
    if (currentAction === "ADD")
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
    else
      updateTodo(`
        mutation UpdateTodo($input: updateTodoInput!) {
          updateTodo(input: $input) {
            id
            text
            star
            status
            createdOn
            updatedOn
          }
        }`,
        {
          "input": {
            id: currentId,
            text: todo
          }

        },
        {
          cache: "no-store"
        })
  }

  useEffect(() => {
    if (addTodoResponse.data) {
      setAllTodoData([...allTodoData, addTodoResponse.data?.createTodo])
      setTodo("");
    }
  }, [addTodoResponse.data, addTodoResponse.error])

  useEffect(() => {
    if (updateTodoResponse.data) {
      setAllTodoData(allTodoData?.map((item: TodoData) => {
        if (item?.id === currentId) {
          item.text = todo

        }
        return item;
      }))
      setTodo("");
      setCurrentId('');
      setCurrentAction('ADD');
    }
  }, [updateTodoResponse.data, updateTodoResponse.error])

  useEffect(() => {
    if (currentAction === 'UPDATE') {
      setTodo((allTodoData.find(todo => todo.id === currentId)?.text)!);

    }
  }, [currentAction, currentId])

  useEffect(() => {
    const where = selectedpage === "STARRED" ? {
      "star": true
    } : {}
    console.log(where);

    getAllTodos(
      `
      query ListTodos($where: whereTodoInput,$limit: Int!) {
        listTodos(where: $where,limit: $limit) {
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
        limit: 20,
        where
      },
      {
        cache: "no-store"
      }
    )
  }, [selectedpage])

  useEffect(() => {
    if (data) {
      console.log(data);

      setAllTodoData(data?.listTodos?.docs)
    }
    if (error) {
      console.log(error, "error")

    }
  }, [data, loading, error])


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
              {sideBarItems.map((item: sideBarItemProp, index: number) => <SideBarItem key={index} active={selectedpage} itemName={item.name} itemIcon={item.icon} setSelectedpage={setSelectedpage} />)}
            </Box>
          </SideBar>
          <SideBar title={selectedpage == "ALL" ? "Tasks" : "Starred"} height={"300px"}>
            <Box>
              {selectedpage === "ALL" && <InputButton todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} currentAction={currentAction} setCurrentAction={setCurrentAction} setCurrentId={setCurrentId} />}
              {allTodoData?.length > 0 &&
                <Box display="flex" flexDirection="column" gap="20px" mt="20px" maxHeight="290px" overflowy="auto">
                  {allTodoData.map((item: TodoData) => {
                    return (
                      <Box key={item?.id} >
                        <CheckBoxReplica label={item?.text} allTodoData={allTodoData} setAllTodoData={setAllTodoData}
                          stared={item?.star} height="40px" id={item?.id}
                          completed={item?.status == "Completed" ? true : false}
                          setCurrentAction={setCurrentAction}
                          setCurrentId={setCurrentId}
                          status={item?.status} />
                      </Box>
                    )
                  })}
                </Box>}
            </Box>

          </SideBar>
        </Box>
      </MainLayout>
    </main>
  );
}
