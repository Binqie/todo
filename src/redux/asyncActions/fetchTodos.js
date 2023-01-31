import axios from 'axios'

export const fetchTodos = () => {
    return async dispatch => {
        const res = await axios.get('https://63d8f3ff5a330a6ae1717afd.mockapi.io/todos')
        dispatch({type: 'FETCH_TODOS', payload: res.data})
    }
}