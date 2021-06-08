import axios from 'axios';
const listUserTodosUrl = process.env.DB_FIND_USER_TODOS;
const createTodoUrl = process.env.DB_ADD_USER_TODOS_BASE;
const getTodoUrl = process.env.DB_FIND_USER_TODO;

// List user's todos
export const listTodos = async (id) => {
	return await axios({
		method: 'post',
		url: listUserTodosUrl,
		data: {
			selector: {
				author: id
			}
		}
	});
};

// Create todo
export const createTodo = async (todo) => {
	return await axios({
		method: 'post',
		url: createTodoUrl,
		data: {
			docs: [ todo ]
		}
	});
};

// Get todo
export const getTodo = async (tid) => {
	return await axios({
		method: 'get',
		url: `${getTodoUrl}${tid}`
	});
};
