import Box from "@/components/Atoms/Box";
import Button from "@/components/Atoms/Button";
import CustomInput from "@/components/Atoms/CustomInput/CustomInput";
import React, {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";

const InputButton = ({
  todo,
  setTodo,
  handleSubmit,
  currentAction,
  setCurrentAction,
  setCurrentId,
}: {
  todo?: string;
  setTodo?: Function;
  handleSubmit?: FormEventHandler<HTMLFormElement>;
  setCurrentAction?: Function;
  setCurrentId?: Function;
  currentAction?: String;
}) => {
  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Box
        m="30px 20px"
        display="flex"
        gap="20px"
        style={{ flexWrap: "wrap", width: "100%" }}
      >
        <CustomInput
          autoFocus={true}
          borderRadius="10px"
          height="50px"
          border="1px solid gray"
          style={{ flex: "1 0 1rem" }}
          value={todo}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTodo(e.target.value)
          }
        />
        <Button size="md" p="10px 30px" type="submit">
          {currentAction === "ADD" ? "Add Todo" : "Update Todo"}
        </Button>
      </Box>
    </form>
  );
};

export default InputButton;
