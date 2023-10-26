import Card from "./todo-card"
import { useSelector} from "react-redux"
import { useEffect,useState } from "react"

function TodolistDone() {
    const { todos } = useSelector((state) => state.todo)
    const [DoneTodo, setDoneTodo] = useState([])
    useEffect(()=>{
        getTodo()
    },[todos])
    function getTodo() {
        const filterTodos = todos.filter((item) => item.finish == true)
        setDoneTodo(filterTodos)
    }

    return (
        <div className="p-3 flex flex-col gap-2 border-2 border-blue-400">
            {DoneTodo.length != 0 ?
                DoneTodo.map((item) => (
                    <Card key={item.id} value={item.value} status={item.finish} id={item.id} />
                )) : (
                    <div className="text-center">Ayo mulai! Buat to-do list pertamamu dan nikmati setiap langkah menuju produktivitas😎</div>
                )

            }
        </div>
    )
}
export default TodolistDone