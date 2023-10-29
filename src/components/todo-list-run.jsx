import Card from "./todo-card"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"

function TodolistRun() {
    const { todos } = useSelector((state) => state.todo)
    const [RunTodo, setRunTodo] = useState([])

    useEffect(() => {
        getTodo()
    }, [todos])

    function getTodo() {
        const filterTodos = todos.filter((item) => item.finish == false)
        return setRunTodo(filterTodos)
    }

    return (
        <div className="p-3 flex flex-col gap-2 border-2 border-blue-400 sm:text-lg">
            {RunTodo.length != 0 ?
                RunTodo.map((item) => (
                    <Card key={item.id} value={item.value} status={item.finish} id={item.id} />
                )) : (
                    <div className="text-center">Belum ada Tugas Lagi nih <br /> Kembali Produktif Yuk🔥</div>
                )

            }
        </div>
    )
}
export default TodolistRun