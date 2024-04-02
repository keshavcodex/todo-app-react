import { Box, Typography } from '@mui/material';
import Item from '../component/Item';
import CreateItem from '../component/CreateItem';

const Todo = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				flexDirection: 'column',
			}}
		>
			<Typography variant='h4'>Todo App</Typography>
			<Box sx={{ border: '1px solid gray', borderRadius: '5px', p: '10px' }}>
				<CreateItem />
                <Item />
			</Box>
		</Box>
	);
};

export default Todo;
