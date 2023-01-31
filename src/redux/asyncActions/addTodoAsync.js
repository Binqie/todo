import axios from 'axios'

export const addTodoAsync = (todo) => {
    console.log('fetch todos');
    return async dispatch => {
        try {
            const res = await axios.post(`https://63d8f3ff5a330a6ae1717afd.mockapi.io/todos`, todo)
            dispatch({type: 'ADD_TODO', payload: res.data})
        } catch (error) {
            console.log(error);
        }
    }
} 