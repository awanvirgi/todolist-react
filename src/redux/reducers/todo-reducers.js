const initialValue = {
    todos: []
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
                todos: clone
            }
        case "DELETE_TODO":
            let deleteTodos = state.todos.filter((todos) => todos.id != action.payload)
            return {
                todos: deleteTodos
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
                todos:finishTodos
            }
        case "DELETE_TODO":
            let donetodos = state.todos.filter((todos) => todos.false != action.payload)
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

export default todoReducer