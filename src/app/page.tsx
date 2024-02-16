"use client";
import Image from "next/image";
import styles from "./page.module.css";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { trpc } from "@/utils/_trpc";
import CheckBoxInput from "@/components/Molecule/CheckBox";
import InputButton from "@/components/Molecule/InputButton";
import Text from "@/components/Atoms/Text";
import SideBar from "@/components/Molecule/SideBar";
"use client"
import CheckBoxInput from "@/components/Molecule/CheckBox";
import InputButton from "@/components/Molecule/InputButton";
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
    <main >
      <CheckBoxInput label="testing" possible={true} width={"500px"} height={"45px"} id="dfg" completed={true}/>
    </main>
  );
}
