// action type
const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

let nextId = 1; // id 값

// action
export const addTodo = (text: string) => ({
    type: ADD_TODO,
    payload: {
        id: nextId++,
        text
    }
})
export const toggleTodo = (id: number) => ({
    type : TOGGLE_TODO,
    payload: id
})
export const removeTodo = (id: number) => ({
    type : REMOVE_TODO,
    payload: id
})

// action object에 대한 type
type TodosAction = 
    | ReturnType<typeof addTodo>
    | ReturnType<typeof toggleTodo>
    | ReturnType<typeof removeTodo>;

// state type
export type Todo = {
    id: number;
    text: string;
    done: boolean;
};

// state
export type TodoState = Todo[];

const initialState: TodoState = [];

// reducer
function todos(
    state: TodoState = initialState,
    action: TodosAction
): TodoState {
    switch (action.type) {
        case ADD_TODO:
            return state.concat({
                id: action.payload.id,
                text: action.payload.text,
                done: false
            });
        case TOGGLE_TODO:
            return state.map(todo => {
                return todo.id === action.payload ? {...todo, done: !todo.done} : todo
            });
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;
    }
}

export default todos;