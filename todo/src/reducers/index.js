import { ADD_TODO, COMPLETE_TODO } from '../actions/actions'

const initialState = { todos: [
    { id:0, task: 'test', tags:[], completed: false},
    { id:1, task: 'test2', tags:[], completed: false}
]}

export const reducer = (state = initialState.todos, action) => {
    switch (action.type) {
        case ADD_TODO:
            console.log(action.payload)
            const task = action.payload.task
            const tags = action.payload.tags
            return [                
               ...state, {id: state.length + task, task: task, tags: tags, completed: false}
            ]
        case COMPLETE_TODO:
             const id = action.payload
            return state.map(t => {
                if (t.id == id){
                    t.completed = !t.completed;
                    return t          
                }else
                    {
                        return t
                    }
            })
        default:
            return state;   
        } 
}
