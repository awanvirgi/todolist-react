import Card from "./todo-card"
import { useSelector,useDispatch } from "react-redux"

function TodolistAll(){
    const dispatch = useDispatch();
    const {isLoading,todos} = useSelector((state)=>state.todo)
    console.log(todos)    
    return(
        <div className="p-3 flex flex-col gap-2 border-2 border-blue-400">
            {todos.map((item)=>(
                <Card key={item.id} value={item.value} status={item.finish}/>
            ))}
        </div>
    );
}
export default TodolistAll