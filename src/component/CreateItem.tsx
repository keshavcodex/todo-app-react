import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setTodoInfo } from '../store/store';
import { get } from 'http';

const CreateItem = () => {
	const [itemText, setItemText] = useState('');
	const todoList = useSelector((state: any) => state.todo.todoInfo);
	const dispatch = useDispatch();

	const handleAddItem = () => {
		const newTodo = { ticked: false, content: itemText };
		const updatedTodoList = [...todoList, newTodo]
		dispatch(setTodoInfo(updatedTodoList));
		localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
		setItemText('');
	};
	return (
		<Box sx={{ display: 'flex', mb: 1 }}>
			<TextField
				variant='standard'
				value={itemText}
				onChange={(e) => setItemText(e.target.value)}
				fullWidth
			/>
			<Button
				onClick={handleAddItem}
				size='small'
				sx={{ border: '1px solid black', borderRadius: 5 }}
			>
				Add
			</Button>
		</Box>
	);
};

export default CreateItem;
