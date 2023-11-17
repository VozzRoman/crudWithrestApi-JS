


export const markUp = (object, container) => {
	
		return container.insertAdjacentHTML("beforeend", `
		<tr id=${object.id}>
		<th  scope="row"></th>
		<td valign="middle">${object.first}</td>
		<td valign="middle">${object.second}</td>
		<td valign="middle">${object.adress}</td>
		<td valign="middle">${object.City}</td>
		<td valign="middle">${object.sex}</td>
		<td>
		<button type="button" class="btn btn-warning edit-js" data-id=${object.id}>edit</button>
		<button type="button" class="btn btn-warning delete-js" data-id=${object.id}>delete</button>
		</td>
		</tr>
		`)

}


export const createMarkUp = (array, container) => {
	return array.map(item => markUp(item, container)).join('');
}


//formMarkup

export const formMarkUp = (object, container) => {
	const form = `
	<form class="row g-3 mx-auto pt-5 pb-5 update-form-js" >
	<div class="col-md-6">
	  <label for="inputEmail4" class="form-label text-light">First name</label>
	  <input value=${object.first} type="text" class="form-control" id="inputEmail4" name="first"/>
	</div>
	<div class="col-md-6">
	  <label for="inputPassword4"class="form-label text-light">Second Name</label>
	  <input value=${object.second} type="text" class="form-control" id="inputPassword4" name="second"/>
	</div>
	<div class="col-12">
	  <label for="inputAddress" class="form-label text-light" >Address</label>
	  <input value=${object.adress} type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" name="adress"/>
	</div>
	<div class="col-md-6">
	  <label for="inputCity" class="form-label text-light">City</label>
	  <input value=${object.City} type="text" class="form-control" id="inputCity"name="city"/>
	</div>
	<div class="col-md-4 flex-shrink-1 flex-grow-1">
	  <label for="inputState" class="form-label text-light">Sex</label>
	  <select value=${object.sex} id="inputState" class="form-select w-100" name="sex">
		 <option  defaultValue="male">male</option>
		 <option  value="female">female</option>
	  </select>
	</div>
	<div class="col-12">
	  <button type="submit" class="btn btn-primary bg-success border-success update-js">Update</button>
	</div>
 </form>
	
	`;
	console.log(form);
	return container.innerHTML = form;
}
export const errorMarkUp = (value, container) => {
	const markUp = `<h1 class="error__message">${value}</h1>`;
	return container.innerHTML = markUp;

}


export const loadreMarkUp = (container) => {
	const loadre = `<div class="loader-center"><div class="lds-hourglass"></div></div>`;
	return container.innerHTML = loadre;
}

export const cleanContainer = (container) => {
	return container.innerHTML = "";
}