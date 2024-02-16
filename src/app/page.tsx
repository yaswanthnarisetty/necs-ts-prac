import Image from "next/image";
import styles from "./page.module.css";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { trpc } from "@/utils/_trpc";
import CheckBoxInput from "@/components/Molecule/CheckBox";

export default  function Home() {
  // const users = await trpc.Query.hello.query({ name: "R" });
  // console.log(users);
  return (
    <main >
      <CheckBoxInput label="testing" possible={true} width={"500px"} height={"45px"} id="dfg"/>
    </main>
  );
};
