import { Box, Typography } from '@mui/material';
import {
	CheckBoxOutlined,
	CheckBoxOutlineBlankOutlined,
	Delete
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { setTodoInfo } from '../store/store';
import { useEffect } from 'react';

const Item = () => {
	// Accessing todoList from Redux store
	const todoList = useSelector((state: any) => state.todo.todoInfo);
	const dispatch = useDispatch();

	// Load todoList from local storage on component mount
	useEffect(() => {
		const getLocalData = localStorage.getItem('todoList');
		if (getLocalData) dispatch(setTodoInfo(JSON.parse(getLocalData)));
		// eslint-disable-next-line
	}, []);

	// Handle toggling of ticked property for a todo item
	const handleTick = (clickedContent: string) => {
		const updatedTodoList = todoList.map((todo: any) => {
			if (todo.content === clickedContent) {
				return { ...todo, ticked: !todo.ticked };
			} else return todo;
		});
		// Update todoList in Redux store and local storage
		dispatch(setTodoInfo(updatedTodoList));
		localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
	};

	// Handle deletion of a todo item
	const handleDelete = (clickedContent: string) => {
		const updatedTodoList = todoList.filter(
			(todo: any) => todo.content !== clickedContent
		);
		// Update todoList in Redux store and local storage
		dispatch(setTodoInfo(updatedTodoList));
		localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
	};

	return (
		<>
			{/* Render each todo item */}
			{todoList.map((todo: any, index: number) => (
				<Box
					key={index}
					sx={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<Box
						sx={{
							display: 'flex'
						}}
					>
						{/* Checkbox for toggling todo completion */}
						<Box sx={{ pr: 1 }} onClick={() => handleTick(todo.content)}>
							{todo.ticked ? (
								<CheckBoxOutlined />
							) : (
								<CheckBoxOutlineBlankOutlined />
							)}
						</Box>
						{/* Todo content */}
						<Typography
							sx={{ textDecoration: todo.ticked ? 'line-through' : 'none' }}
						>
							{todo.content}
						</Typography>
					</Box>
					{/* Delete button */}
					<Box>
						<Delete
							onClick={() => handleDelete(todo.content)}
							sx={{ alignItems: 'flex-end', pl: 2 }}
						/>
					</Box>
				</Box>
			))}
		</>
	);
};

export default Item;
