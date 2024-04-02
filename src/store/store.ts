import { configureStore } from '@reduxjs/toolkit';
import { todoSlice } from './todo-redux';

const store = configureStore({
	reducer: {
		todo: todoSlice.reducer
	}
});

export const setTodoInfo = (body: any) =>
	store.dispatch(todoSlice.actions.setTodoInfo(body));

export default store;
