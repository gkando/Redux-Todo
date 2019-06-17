import { ADD_TODO, COMPLETE_TODO } from '../actions/actions'

const initialState = { todos: [
    { id:0, item: 'test', completed: false},
    { id:1, item: 'test2', completed: false}
]}

export const reducer = (state = initialState.todos, action) => {
    switch (action.type) {
        case ADD_TODO:
            const item = action.payload
            return [                
               ...state, {id: state.length + item, item: item, completed: false}
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
