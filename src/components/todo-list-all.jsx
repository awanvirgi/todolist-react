import Card from "./todo-card"
import { useSelector} from "react-redux"

function TodolistAll() {
    const { todos } = useSelector((state) => state.todo)
    return (
        <div className="p-3 flex flex-col gap-2 border-2 border-blue-400 sm:text-lg">
            {todos.length!=0?
                todos.map((item) => (
                    <Card key={item.id} value={item.value} status={item.finish} id={item.id}/>
                )):(
                <div className="text-center">Ayo mulai! Buat to-do list pertamamu dan nikmati setiap langkah menuju produktivitas</div>
                )
            
            }
        </div>
    );
}
export default TodolistAll