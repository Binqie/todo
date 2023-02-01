import axios from 'axios'

export const tagTodoAsync = (id, bool) => {
    console.log('fetch todos');
    return async dispatch => {
        try {
            const res = await axios.put(`https://binqie-todo.herokuapp.com/todos/${id}`, {important: bool})
            dispatch({type: 'TAG_TODO', payload: res.data._id})
        } catch (error) {
            console.log(error);
        }
    }
} 