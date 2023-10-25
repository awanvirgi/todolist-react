const initialValue = {
    todos : [
        {
            id:0,
            value:"Pekerjaan Tugas",
            finish:false
        },
        {
            id:1,
            value:"Project Akhir",
            finish:true
        },
    ],
    isLoading:true
}

function todoReducer(state = initialValue,action){
    switch(action.type){
        default : return state
    }
}
export default todoReducer