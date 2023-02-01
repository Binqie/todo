import axios from 'axios'

export const completeTodoAsync = (id, bool) => {
    console.log('fetch todos');
    return async dispatch => {
        try {
            const res = await axios.put(`https://binqie-todo.herokuapp.com/todos/${id}`, {completed: bool})
            dispatch({type: 'COMPLETE_TODO', payload: res.data._id})
        } catch (error) {
            console.log(error);
        }
    }
} 