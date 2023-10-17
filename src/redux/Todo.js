import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const todoSlice = createSlice({
    name: "todos",
    initialState: [
        {
            id: uuidv4(),
            taskName: 'First Task',
            description: 'Description of the first Task',
            checked: true
        },
        {
            id: uuidv4(),
            taskName: 'Second Task',
            description: 'Description of the second Task',
            checked: true
        },
        {
            id: uuidv4(),
            taskName: 'Third Task',
            description: 'Description of the Third Task',
            checked: false
        },
        {
            id: uuidv4(),
            taskName: 'Fourth Task',
            description: 'Description of the Fourth Task',
            checked: true
        }],
    reducers: {

        add: (state, action) => {

            const newTask = action.payload;
            state.push(newTask);
        },
        delet: (state, action) => {
            return state.filter((e) => e.id !== action.payload);
        },
        togueltodo: (state, action) => {
            return state.map((e) => {
                if (e.id === action.payload) {
                    console.log(e.checked);
                    return { ...e, checked: !e.checked }
                } else { return e }
            })
        },
        ////// Another Way to do togueltodo 2
        togueltodo2: (state, action) => {
            const index = state.find((e) => e.id === action.payload);
            state[index].checked = !state[index].checked;
        },
        edittodo: (state, action) => {
            const editedTask = action.payload;
            console.log("From Todo :", editedTask);

            const index = state.findIndex((e) => e.id === editedTask.id);
            console.log("Index from Todo :", index);
            state.splice(index, editedTask);
            alert(`Description of ${editedTask.taskName} is edited successfully.`)
        },
        sorttodo: (state, action) => {
            state.sort((firstTask, secondTask) => secondTask.checked - firstTask.checked);
        },
        // sorttodoDone: (state, action) => {
        //     return state.filter((e) => e.checked === true);
        // },
        // sorttodoNotDone: (state, action) => {
        //     return state.filter((e) => e.checked === false);
        // }
    }
})
export const { add, delet, togueltodo, togueltodo2, edittodo, sorttodo } = todoSlice.actions;
export default todoSlice.reducer;