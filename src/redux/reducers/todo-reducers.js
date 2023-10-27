const initialValue = {
    todos: [],
    editprops:{
        id:0,
        value:""
    }
}

function todoReducer(state = initialValue, action) {
    switch (action.type) {
        case "ADD_TODO":
            let newTodos = {
                id: Date.now(),
                value: action.payload.value,
                finish: action.payload.finish
            }
            const clone = [...state.todos, newTodos]
            return {
                todos: clone,
                editprops:state.editprops
            }
        case "DELETE_TODO":
            let deleteTodos = state.todos.filter((todos) => todos.id != action.payload)
            return {
                todos: deleteTodos,
                editprops:state.editprops

            }
        case "SWITCH_TODO":
            let finishTodos = state.todos.map((item)=>{
                if (item.id === action.payload) {
                    if(item.finish===true)
                    return { ...item, finish: false };
                    return { ...item, finish: true };
                }
                return item
            })
            return{
                todos:finishTodos,
                editprops:state.editprops
            }
        case "GET_TODO":
            let editValue = {
                id:action.payload.id,
                value:action.payload.value
            }
            return {
                todos:state.todos,
                editprops:editValue
            }
        case "EDIT_TODO":
            let editTodos = state.todos.map((item)=>{
                if (item.id === action.payload.id) {
                    return { ...item, value: action.payload.value };
                }
                return item
            })

            return{
                todos:editTodos,
                editprops:{
                    id:0,
                    value:""
                }
            }
        default: return state
    }
}
export function addTodo(data) {
    return {
        type: "ADD_TODO",
        payload: data
    }
}
export function deleteTodo(id) {
    return {
        type: "DELETE_TODO",
        payload: id
    }
}
export function switchTodo(id) {
    return {
        type: "SWITCH_TODO",
        payload: id
    }
}
export function filterTodo(id) {
    return {
        type: "FILTER_TODO",
        payload: id
    }
}
export function getEditTodo(props) {
    return {
        type: "GET_TODO",
        payload: props
    }
}
export function postEditTodo(props) {
    return {
        type: "EDIT_TODO",
        payload: props
    }
}

export default todoReducer