import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]

}

export const todoSlice = createSlice({

    name: 'todo',
    // we can declare the initial state here also
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },


        removeTodo: (state, action) => {
            state.todos = state.todos.filter(() => todo.id !== action.payload)
        },

        //----------  update todo i have to do for revision  ------



    }


})


export const {addTodo , removeTodo} = todoSlice.actions

export default todoSlice.reducer