import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo,postEditTodo } from "../redux/reducers/todo-reducers"

function Formtodo() {
    const dispatch = useDispatch();
    const [input, setInput] = useState("")
    const { editprops } = useSelector((state) => state.todo)

    useEffect(() => {
        setInput(editprops.value)
    }, [editprops])

    const handleInput = (event) => {
        event.preventDefault()
        if (editprops.value==="") {
            let newTodo = {
                value: input,
                finish: false
            }
            
            dispatch(addTodo(newTodo))
        } else {
            let EditTodo = {
                id:editprops.id,
                value:input
            }
            dispatch(postEditTodo(EditTodo))
        }
        setInput("")
    }
    return (
        <div className="mb-10">
            <form className="flex gap-10">
                <input className="bg-transparent border-b-4 border-blue-400 outline-none text-white grow"
                    placeholder="Masukan Kegiatan"
                    type="text"
                    value={input} onChange={(e) => setInput(e.target.value)} />
                <button className="bg-blue-400 rounded p-2 font-bold text-white" onClick={handleInput}>{editprops.value?`Edit Todo`:"Tambah +"} </button>
            </form>
        </div>
    )
}
export default Formtodo