

export const createUserService = async (body:{name:string; email:string; userName:string; password:string}) => {
	try {
		console.log("logando o bdy" , body);
		
		const response = await fetch("http://localhost:8000/api/user/create",
			{
				headers:{
					"Content-Type": "application/json"
				},
				method:"POST",
				body:JSON.stringify(body)
			});
		return response.json();
		
	} catch (error) {
		console.log("erro em createUserService " + error);
	}

};
