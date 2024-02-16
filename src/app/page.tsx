
"use client"
import Box from "@/components/Atoms/Box";
import MainLayout from "@/components/Layout/MainLayout";
import CheckBoxInput from "@/components/Molecule/CheckBox";
import InputButton from "@/components/Molecule/InputButton";
import SideBar from "@/components/Molecule/SideBar";
import SideBarItem from "@/components/Molecule/SideBarItem";
import { ClipboardCheck, Star } from 'lucide-react';
import { FormEvent, ReactElement, useState } from "react";

export default function Home() {
  // const users = await trpc.Query.hello.query({ name: "R" });
  // console.log(users);

  type sideBarItemProp = {
    name: string,
    icon: ReactElement,
    active: boolean
  }

  const sideBarItems: sideBarItemProp[] = [
    {
      name: "All",
      icon: <ClipboardCheck size={16} color="#000" />,
      active: true
    },
    {
      name: "Starred",
      icon: <Star fill="#000" size={16} color="#000" />,
      active: false
    }
  ]



  const [todo, setTodo] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const addTodoResponse = await fetch("url", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ todo }),
        cache: "no-store"
      })
    } catch (error) {

    }

  }

  return (

    <main>
      <MainLayout>

        {/* <CheckBoxInput label="testing" possible={true} />
        <InputButton />
        {sideBarItems.map((item: sideBarItemProp) => <SideBarItem active={item.active} itemName={item.name} itemIcon={item.icon} />)} */}
        <Box style={{ display: "grid", gridTemplateColumns: "30% 70%", gap: "30px", margin: "10px 5%" }}>

          <SideBar title={"Filters"} height={"300px"}>
            <Box display="flex" justifyContent="flex-start" flexDirection="column" gap="15px" >
              {sideBarItems.map((item: sideBarItemProp) => <SideBarItem active={item.active} itemName={item.name} itemIcon={item.icon} />)}
            </Box>
          </SideBar>
          <SideBar title={"Tasks"} height={"300px"}>
            <Box width="100%">
              <InputButton todo={todo} setTodo={setTodo} handleSubmit={handleSubmit} />
            </Box>
          </SideBar>
        </Box>


      </MainLayout>
    </main>
  );
}
