import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
	name: 'todo',
	initialState: {
		todoInfo: [{ticked: false, content: 'Demo todo item'}]
		// todoInfo: []
	},
	reducers: {
		setTodoInfo(state, action) {
			state.todoInfo = action.payload;
		}
	}
});
