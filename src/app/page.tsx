"use client"
import styles from "./page.module.css";
import Button from "@/components/Atoms/Button";

export default async function Home() {
  return (
    <main className={styles.main}>
      <Button size="md" onClick={()=>alert('Hello')} >Click Me!</Button>
    </main>
  );
}
