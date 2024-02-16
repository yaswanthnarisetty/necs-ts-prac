
"use client"
import Box from "@/components/Atoms/Box";
import MainLayout from "@/components/Layout/MainLayout";
import CheckBoxInput from "@/components/Molecule/CheckBox";
import InputButton from "@/components/Molecule/InputButton";
import SideBar from "@/components/Molecule/SideBar";
import SideBarItem from "@/components/Molecule/SideBarItem";
import { ClipboardCheck, Star } from 'lucide-react';
import { ReactElement, useEffect, useState } from "react";
import { useLazyQuery } from "./hooks";
import { serverFetch } from "./actions";
import Text from "@/components/Atoms/Text";
export type TodoData = {
  id: string;
  status: string;
  star: boolean;
  text: string;

}
export default function Home() {

  // const users = await trpc.Query.hello.query({ name: "R" });
  // console.log(users);
  const [selectedpage, setSelectedpage] = useState<string>("ALL")
  const [allTodoData, setAllTodoData] = useState<TodoData[]>([]);
  const [getAllTodos, { data, loading, error }] = useLazyQuery(serverFetch)

  type sideBarItemProp = {
    name: string,
    icon: ReactElement,
    active: boolean
  }

  const sideBarItems: sideBarItemProp[] = [
    {
      name: "All",
      icon: <ClipboardCheck size={16} color="#fff" />,
      active: true
    },
    {
      name: "Starred",
      icon: <Star fill="#fff" size={16} color="#fff" />,
      active: true
    }
  ]
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

  return (

    <main>
      <MainLayout>

        {/* <CheckBoxInput label="testing" possible={true} />
        <InputButton />
        {sideBarItems.map((item: sideBarItemProp) => <SideBarItem active={item.active} itemName={item.name} itemIcon={item.icon} />)} */}
        <Box style={{ display: "grid", gridTemplateColumns: "30% 70%", gap: "20px", margin: "10px 100px" }}>

          <SideBar title={"Filters"} height={"300px"} >

          </SideBar>
          <SideBar title={selectedpage == "ALL" ? "Tasks" : "Starred"} height={"300px"}>
            {selectedpage == "ALL" ? <Box>
              {allTodoData?.length > 0 &&
                <Box display="flex" flexDirection="column" gap="20px">
                  {allTodoData.map((item: TodoData) => {
                    return (
                      <Box key={item?.id} >
                        <CheckBoxInput allTodoData={allTodoData} setAllTodoData={setAllTodoData} label={item?.text} possible={true} width="300px" id={item?.id} stareed={item?.star} />

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
