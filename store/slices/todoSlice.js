import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
	toDoList: [],
};

const { actions, reducer } = createSlice({
	name: "TODO",
	initialState: INITIAL_STATE,
	reducers: {
		createNewToDo: (state, { payload }) => {
			state.toDoList.push(payload);
		},
		deleteCurrentToDo: (state, { payload }) => {
			for (let index in state.toDoList) {
				if (state.toDoList[index].id == payload.id) {
					state.toDoList.splice(index, 1);
					index--;
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
