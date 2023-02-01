import axios from 'axios'

export const fetchTodos = () => {
    return async dispatch => {
        const res = await axios.get('https://binqie-todo.herokuapp.com/todos')
        console.log(res.data);
        dispatch({type: 'FETCH_TODOS', payload: res.data})
    }
}