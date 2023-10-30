const userService = () => {

	const create = async (body:{name:string; email:string; userName:string; password:string}) => {
		const response = await fetch("http://localhost:3000/api/user/create",
			{
				headers:{
					"Content-Type":"application/json"
				},
				method:"post",
				body:JSON.stringify({...body})
			});

		return response.json();
	};

	return {create};

};

export const UserService = userService();