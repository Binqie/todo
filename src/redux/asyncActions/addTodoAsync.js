import axios from 'axios'

export const addTodoAsync = (todo) => {
    console.log('fetch todos');
    return async dispatch => {
        try {
            const res = await axios.post(`https://binqie-todo.herokuapp.com/todos`, todo)
            dispatch({type: 'ADD_TODO', payload: res.data})
        } catch (error) {
            console.log(error);
        }
    }
} 