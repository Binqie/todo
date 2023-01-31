import axios from 'axios'

export const deleteTodoAsync = (id) => {
    console.log('fetch todos');
    return async dispatch => {
        try {
            const res = await axios.delete(`https://63d8f3ff5a330a6ae1717afd.mockapi.io/todos/${id}`)
            dispatch({type: 'REMOVE_TODO', payload: res.data.id})
        } catch (error) {
            console.log(error);
        }
    }
}