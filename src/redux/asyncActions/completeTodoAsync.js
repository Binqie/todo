import axios from 'axios'

export const completeTodoAsync = (id, bool) => {
    console.log('fetch todos');
    return async dispatch => {
        try {
            const res = await axios.put(`https://63d8f3ff5a330a6ae1717afd.mockapi.io/todos/${id}`, {completed: bool})
            dispatch({type: 'COMPLETE_TODO', payload: res.data.id})
        } catch (error) {
            console.log(error);
        }
    }
} 