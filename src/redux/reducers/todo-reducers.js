const initialValue = {
    todos: [
        {
            id: 0,
            value: "Pekerjaan Tugas",
            finish: false
        },
        {
            id: 1,
            value: "Project Akhir",
            finish: true
        },
    ],
    isLoading: true
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
            let deleteTodos = state.todos.filter((todos)=>todos.id != action.payload)
            console.log("Success")
            return {
                todos : deleteTodos
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

export default todoReducer