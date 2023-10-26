import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todo-reducers"

function Formtodo() {
    const dispatch = useDispatch();
    const [ input, setInput ] = useState("")

    const handleInput = (event) => {
        event.preventDefault()
        let newToDO = {
            value: input,
            finish: false
        }
        dispatch(addTodo(newToDO))

    }
    return (
        <div className="mb-10">
            <form className="flex gap-10">
                <input className="bg-transparent border-b-4 border-blue-400 outline-none text-white grow"
                    placeholder="Masukan Kegiatan"
                    type="text"
                    value={input} onChange={(e) => setInput(e.target.value)} />
                <button className="bg-blue-400 rounded p-2 font-bold text-white" onClick={handleInput}>Tambah +</button>
            </form>
        </div>
    )
}
export default Formtodo