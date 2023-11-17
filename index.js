import { addUser, deleteUser, getAllUsers, getByIdUser, updateUser } from "./modules/api.js";
import { cleanContainer, createMarkUp, errorMarkUp, formMarkUp, loadreMarkUp, markUp} from "./modules/helper.js";
const containerEl = document.querySelector(".container-js");
const formEl = document.querySelector('.form-js');
const backDropEl = document.querySelector('.backdrop');
const modalConatinerEl = document.querySelector(".modal__container-js");
const errorContainer = document.querySelector(".section__container-js");






//form
formEl.addEventListener('submit', onSubmit);
async function onSubmit (e){
e.preventDefault();
console.log(e.target.elements.first.value);
const form = e.target;
const data = {
	first: form.elements.first.value,
	second: form.elements.second.value,
	adress: form.elements.adress.value,
	City: form.elements.city.value,
	sex: form.elements.sex.value,
}
console.log(data);
for (const key in data) {
	if(data[key] === "")
		return alert("fill all fields")
	}

try {
	const getUser = await getAllUsers();
	if(getUser.find(item => item.first === data.first && item.second === data.second && item.adress === data.adress && item.City === data.City && item.sex === data.sex)){
		 	  return alert("user already exist")
	} else {
	const addDataUser = await addUser(data);
				markUp(addDataUser, containerEl);
				form.reset();
	}
} catch (error) {
	 alert("unable to update");
}
	
	
	
}

//delete and Update

document.addEventListener("click", onClick);

function onClick (e) {
	//delete
	if(e.target.closest('.delete-js')){
		console.log("delete");
		const id = Number(e.target.dataset.id);
		deleteUser(id).then(res => {
			if(res){
				document.getElementById(`${id}`).remove();
			}
		})
		.catch(error => {
			error.message = "id is not found";
			console.log(error.message);
		})
		// containerEl.innerHTML = "";
		// getAllUsers().then(res => createMarkUp(res, containerEl));
		
	}
	//openEdit
	if(e.target.closest('.edit-js')){
		backDropEl.classList.add("active");
		console.log("edit");
		const id = Number(e.target.dataset.id);
		console.log(id);
		getByIdUser(id).then(res => {
			formMarkUp(res, modalConatinerEl)
			updateSubmit(id);
		})
		.catch(error => {
			error.message = "id is not found";
			console.log(error.message);
		})

	}
	//closeEdit
	if(e.target.closest(".close-js")){
		backDropEl.classList.remove("active");
	}
	if(e.target.closest(".update-js")){
		console.log("submit");
		backDropEl.classList.remove("active");
		
	}		
}

 function updateSubmit (id) {
	const updateSubmit = document.querySelector(".update-form-js");
	updateSubmit.addEventListener('submit', onUpdateSubmit);

//Update function
async	function onUpdateSubmit (e) {
		e.preventDefault();
		const form = e.target;
		const data = {
	first: form.elements.first.value,
	second: form.elements.second.value,
	adress: form.elements.adress.value,
	City: form.elements.city.value,
	sex: form.elements.sex.value,
	id: id
}
	console.log(data);
	const updated = await updateUser(data)
	if(updated){
		containerEl.innerHTML = "";
		getAllUsers()
   	.then(res => createMarkUp(res, containerEl))
		.catch(error => {
			error.message = "Page not found";
			console.log(error);
		})
	}
	//если не асинк!!!
	// .then(res => {
	// 	if(res){
	// 		containerEl.innerHTML = "";
	// 		getAllUsers()
	// 		.then(res => createMarkUp(res, containerEl))
	// 	}
	// });

	
	}
}


//render all users
//THEN вариант--------------------------------
// loadreMarkUp(containerEl);
// getAllUsers()
// .then(res => {
// 		containerEl.innerHTML = "";
// 		createMarkUp(res, containerEl)
// })
// .catch(error => {
// 	error.message = "Page not found";
// 	console.log(error);
// 	errorMarkUp(error.message, errorContainer);
// })


//Async вариант-----------------------------
const getAll = async () => {
	loadreMarkUp(containerEl);
	try {
		const res = await getAllUsers()
		cleanContainer(containerEl);
		createMarkUp(res, containerEl);
	} catch (error) {
		error.message = "Page not found";
		errorMarkUp(error.message, errorContainer);
	}

} 
getAll();





