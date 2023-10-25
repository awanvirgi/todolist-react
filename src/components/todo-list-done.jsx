import Card from "./todo-card"


function TodolistDone(){
    return(
        <div className="p-3 flex flex-col gap-2 border-2 border-blue-400">
            <Card/>
            <Card/>        
        </div>
    )
}
export default TodolistDone