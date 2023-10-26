import edit from '../assets/edit.svg'
import delet from '../assets/delet.svg'
import { useDispatch } from 'react-redux'
import { deleteTodo,switchTodo } from "../redux/reducers/todo-reducers"
function Card(props) {
    const dispatch = useDispatch()
    const handledelet = (event) => {
        event.preventDefault()
        dispatch(deleteTodo(props.id))
    }
    const handlefinish = (event)=>{
        event.preventDefault()
        dispatch(switchTodo(props.id))

    }
    return (
        <div className={(!props.status) ? "flex border-2 border-blue-400" : "flex border-2 border-blue-400 bg-slate-500 opacity-40"}>
            <button className='border-2 m-3 border-blue-400'><div className='h-5 flex items-center justify-center aspect-square' onClick={handlefinish} >{(!props.status) ? "" : "✓"}</div></button>
            <div className={(!props.status) ? "w-100 h-12 p-4 flex items-center grow" : "w-100 h-12 p-4 flex items-center grow line-through"}>
                {props.value}
            </div>

            {!props.status ? (
                <div className='flex'>
                    <button className='bg-green-600 flex w-12 h-12 p-2'>
                        <img className='flex w-100 h-auto object-cover' src={edit} alt="Edit" />
                    </button>
                    <button className='bg-red-600 flex w-12 h-12 p-2' onClick={handledelet}>
                        <img className='flex w-100 h-auto object-cover' src={delet} alt="Delete" />
                    </button>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default Card