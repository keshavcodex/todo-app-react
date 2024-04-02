import { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setTodoInfo } from '../store/store';

const CreateItem = () => {
	// State to manage input text for new todo item
	const [itemText, setItemText] = useState('');

	// Accessing todoList from Redux store
	const todoList = useSelector((state: any) => state.todo.todoInfo);
	const dispatch = useDispatch(); // Accessing dispatch function

	// Function to handle adding a new todo item
	const handleAddItem = () => {
		// Creating a new todo object with default ticked status and input content
		const newTodo = { ticked: false, content: itemText };
		// Creating a new array with the updated todoList by adding the new todo object
		const updatedTodoList = [...todoList, newTodo];
		// Dispatching an action to update todoList in Redux store
		dispatch(setTodoInfo(updatedTodoList));
		// Storing updated todoList in local storage
		localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
		// Clearing input text after adding the new todo item
		setItemText('');
	};

	return (
		<Box sx={{ display: 'flex', mb: 1 }}>
			{/* Text input for new todo item */}
			<TextField
				placeholder='write here...'
				variant='standard'
				value={itemText}
				onChange={(e) => setItemText(e.target.value)}
				fullWidth
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						handleAddItem();
						// Call handleAddItem function if Enter key is pressed
					}
				}}
			/>
			{/* Button to add the new todo item */}
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
