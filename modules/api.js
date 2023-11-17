

//JSON SERVER
//в терминале командой json-server db.json запускаем сервер

axios.defaults.baseURL = 'http://localhost:3000/posts';


export const getAllUsers = async () => {
	
		const response = await axios.get('/');
		return response.data;
}


export const addUser = async (data) => {
		const response = await axios.post('/', data);
		console.log(response.data);
		return response.data;

}

export const deleteUser = async (id) => {
		const response = await axios.delete(`/${id}`);
		console.log("Delete0data", response.data);
		return response.data;
}

export const getByIdUser = async (id) => {
	
	const response = await axios.get(`/${id}`);
	console.log(response.data);
	return response.data;

}

export const updateUser = async (data) => {
		const response = await axios.put(`/${data.id}`, data);
		console.log(response.data);
		return response.data;
	
}
