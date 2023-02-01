import axios from 'axios'

export const deleteTodoAsync = (id) => {
    console.log('fetch todos');
    return async dispatch => {
        try {
            const res = await axios.delete(`https://binqie-todo.herokuapp.com/todos/${id}`)
            dispatch({type: 'REMOVE_TODO', payload: res.data._id})
        } catch (error) {
            console.log(error);
        }
    }
}