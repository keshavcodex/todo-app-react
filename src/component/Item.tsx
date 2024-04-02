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
	const todoList = useSelector((state: any) => state.todo.todoInfo);
	const dispatch = useDispatch();
	useEffect(() => {
		const getLocalData = localStorage.getItem('todoList');
		if (getLocalData) dispatch(setTodoInfo(JSON.parse(getLocalData)));
	}, []);

	const handleTick = (clickedContent: string) => {
		const updatedTodoList = todoList.map((todo: any) => {
			if (todo.content === clickedContent) {
				return { ...todo, ticked: !todo.ticked };
			} else return todo;
		});
		dispatch(setTodoInfo(updatedTodoList));
		localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
	};
	const handleDelete = (clickedContent: string) => {
		const updatedTodoList = todoList.filter(
			(todo: any) => todo.content !== clickedContent
		);
		dispatch(setTodoInfo(updatedTodoList));
		localStorage.setItem('todoList', JSON.stringify(updatedTodoList));
	};

	return (
		<>
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
						<Box sx={{ pr: 1 }} onClick={() => handleTick(todo.content)}>
							{todo.ticked ? (
								<CheckBoxOutlined />
							) : (
								<CheckBoxOutlineBlankOutlined />
							)}
						</Box>
						<Typography
							sx={{ textDecoration: todo.ticked ? 'line-through' : 'none' }}
						>
							{todo.content}
						</Typography>
					</Box>
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
