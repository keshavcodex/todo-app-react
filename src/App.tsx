import store from './store/store';
import { Provider } from 'react-redux';
import './App.css';
import Todo from './screen/Todo';

const App = () => {
	return (
		// Providing the Redux store to the entire application using Provider
		<Provider store={store}>
			<Todo />
		</Provider>
	);
};

export default App;
