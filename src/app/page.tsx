
"use client"
import Box from "@/components/Atoms/Box";
import MainLayout from "@/components/Layout/MainLayout";
import CheckBoxInput from "@/components/Molecule/CheckBox";
import InputButton from "@/components/Molecule/InputButton";
import SideBar from "@/components/Molecule/SideBar";
import SideBarItem from "@/components/Molecule/SideBarItem";
import { ClipboardCheck, Star } from 'lucide-react';
import { ReactElement, useState } from "react";

export default function Home() {
  // const users = await trpc.Query.hello.query({ name: "R" });
  // console.log(users);
  const [selectedpage,setSelectedpage]=useState<string>("ALL")

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
        <Box style={{ display: "grid", gridTemplateColumns: "25% 75%", gap: "20px" }}>

          <SideBar title={"Filters"}  height={"300px"} >
            sxrdctfyguhnijm,k
          </SideBar>
          <SideBar title={selectedpage=="ALL"?"Tasks":"Starred"}  height={"300px"}>
            {selectedpage =="ALL" ?<Box>
              {}
            </Box>:<></>}

          </SideBar>
        </Box>


      </MainLayout>
    </main>
  );
}
