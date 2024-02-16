"use client"
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

export default function Home() {
  // const users = await trpc.Query.hello.query({ name: "R" });
  // console.log(users);
  return (
   
    <main>
      <CheckBoxInput label="testing" possible={true} />
      <InputButton />
      <div >
      <Text
        color="blue"
        fontSize="16px"
        fontWeight="bold"
        lineHeight="1.5"
        mt="100px"
        mr="200px"
        mb="10px"
        ml="20px"
        paddingTop="100px"
        paddingRight="10px"
        paddingBottom="100px"
        paddingLeft="100px"
        backgroundcolor="red"
      >
        Hello, World!
      </Text>
    </div>
    </main>
  );
};
