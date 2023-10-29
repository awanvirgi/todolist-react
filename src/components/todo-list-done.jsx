import Card from "./todo-card"
import { useSelector } from "react-redux"
import { useEffect, useState } from "react"


function TodolistDone() {
    const { todos } = useSelector((state) => state.todo)
    const [DoneTodo, setDoneTodo] = useState([])
    const navigate = useNavigate();

    const redirectToHome = () => {
        navigate("/");
    };

    useEffect(() => {
        redirectToHome()
    }, [])

    useEffect(() => {
        getTodo()
    }, [todos])

    function getTodo() {
        const filterTodos = todos.filter((item) => item.finish == true)
        setDoneTodo(filterTodos)
    }

    return (
        <div className="p-3 flex flex-col gap-2 border-2 border-blue-400 sm:text-lg">
            {DoneTodo.length != 0 ?
                DoneTodo.map((item) => (
                    <Card key={item.id} value={item.value} status={item.finish} id={item.id} />
                )) : (
                    <div className="text-center">Hayoo belum ada Tugas Yang Selesai <br />Jangan Lupa yak Kerjakan Tugasnya!!</div>
                )

            }
        </div>
    )
}
export default TodolistDone