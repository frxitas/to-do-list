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
      state.toDoList.find(payload.id);
    },
  },
});

export const { createNewToDo } = actions;

export default reducer;
