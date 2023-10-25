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
        case "addTodo":
            let newTodos = {
                id: Date.now(),
                value: action.payload.value,
                finish: action.payload.finish
            }
            const clone = [...state.todos, newTodos]
            return {
                todos: clone
            }
        default: return state
    }
}
export function addTodo(data) {
    return {
        type: "addTodo",
        payload: data
    }
}

export default todoReducer