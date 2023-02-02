import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

const initalState = {
    todos: [],
    sidebarOpened: false,
}

const FETCH_TODOS = "FETCH_TODOS";
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const COMPLETE_TODO = "COMPLETE_TODO";
const TAG_TODO = "TAG_TODO";
const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

const reducer = (state  = initalState, action) => {
    switch (action.type) {
        case TOGGLE_SIDEBAR:
            return {...state, sidebarOpened: !state.sidebarOpened};
        case FETCH_TODOS:
            return {...state, todos: action.payload};
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]};
        case REMOVE_TODO:
            return {...state, todos: state.todos.filter(todo => todo._id !== action.payload)};
        case COMPLETE_TODO:
            return {...state, todos: state.todos.map(todo => {
                if (todo._id === action.payload) {
                    todo.completed = !todo.completed
                    return todo
                }
                return todo
            })};
        case TAG_TODO:
            return {...state, todos: state.todos.map(todo => {
                if (todo._id === action.payload) {
                    todo.important = !todo.important
                    return todo
                }
                return todo
            })};
        default:
            return state;
    }
}

const store = createStore(reducer, applyMiddleware(thunk));

export default store;