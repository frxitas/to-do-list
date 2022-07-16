import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
	toDoItem: null,
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
			for (let i = 0; i < state.toDoList.length; i++) {
				if (state.toDoList[i].id == payload.id) {
					state.toDoList.splice(i, 1);
					i--;
				}
			}
		},
	},
});

export const { createNewToDo, deleteCurrentToDo } = actions;

export default reducer;
