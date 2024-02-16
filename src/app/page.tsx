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

export default function Home() {
  // const users = await trpc.Query.hello.query({ name: "R" });
  // console.log(users);
  return (
    <main>
      <SideBar
        title="Your Sidebar Title"
        width="300px"
        height="400px"
        borderRadius="20px"
      >
        <Text
        color="white"
        fontSize="16px"
        fontWeight="bold"
        mt="60px"
      >
        Hello, World!
      </Text>
      </SideBar>
    </main>
  );
}
