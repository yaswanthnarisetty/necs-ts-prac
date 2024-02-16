
"use client"
import Box from "@/components/Atoms/Box";
import MainLayout from "@/components/Layout/MainLayout";
import CheckBoxInput from "@/components/Molecule/CheckBox";
import InputButton from "@/components/Molecule/InputButton";
import SideBar from "@/components/Molecule/SideBar";
import SideBarItem from "@/components/Molecule/SideBarItem";
import { ClipboardCheck, Star } from 'lucide-react';
import { ReactElement } from "react";

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
      icon: <ClipboardCheck size={16} color="#fff" />,
      active: true
    },
    {
      name: "Starred",
      icon: <Star fill="#fff" size={16} color="#fff" />,
      active: true
    }
  ]

  return (

    <main>
      <MainLayout>

        {/* <CheckBoxInput label="testing" possible={true} />
        <InputButton />
        {sideBarItems.map((item: sideBarItemProp) => <SideBarItem active={item.active} itemName={item.name} itemIcon={item.icon} />)} */}
        <Box style={{ display: "grid", gridTemplateColumns: "30% 70%", gap: "20px", margin: "10px 100px" }}>

          <SideBar title={"Filters"}  height={"300px"} >
            
          </SideBar>
          <SideBar title={"Filters"}  height={"300px"}>
            
          </SideBar>
        </Box>


      </MainLayout>
    </main>
  );
}
