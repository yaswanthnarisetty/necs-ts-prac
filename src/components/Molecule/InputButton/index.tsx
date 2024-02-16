import Box from '@/components/Atoms/Box'
import Button from '@/components/Atoms/Button'
import CustomInput from '@/components/Atoms/CustomInput/CustomInput'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const InputButton = () => {
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
        <form onSubmit={handleSubmit}>
            <Box margin='30px 20px' display='flex' gap='20px' style={{ flexWrap: "wrap" }}>
                <CustomInput borderRadius='10px' height='50px' border='1px solid gray' style={{ flex: "1 0 1rem" }}
                    value={todo}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)} />
                <Button size='md' p='10px 30px' type='submit'>Add Todo</Button>
            </Box>
        </form>
    )
}

export default InputButton
