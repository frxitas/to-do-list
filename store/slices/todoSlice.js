import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
	toDoList: [
		{
			id: 1,
			name: "task",
			category: "Deveres",
			checked: false,
		},
		{
			id: 2,
			name: "task",
			category: "Lembretes",
			checked: false,
		},
		{
			id: 3,
			name: "task",
			category: "Estudos",
			checked: false,
		},
		{
			id: 4,
			name: "task",
			category: "Estudos",
			checked: false,
		},
	],
};

const { actions, reducer } = createSlice({
	name: "TODO",
	initialState: INITIAL_STATE,
	reducers: {
		createNewToDo: (state, { payload }) => {
			state.toDoList.push(payload);
		},
		deleteCurrentToDo: (state, { payload }) => {
			for (let i = 0; i < state.toDoList.length; i++) {
				if (state.toDoList[i].id == payload.id) {
					state.toDoList.splice(i, 1);
					i--;
				}
			}
		},
		updateTodoList: (state, { payload }) => {
			state.toDoList = payload;
		},
	},
});

export const { createNewToDo, deleteCurrentToDo, updateTodoList } = actions;

export default reducer;
