export const listProjectService = async () =>{
	const response = await fetch("http://localhost:8000/api/project/list",
		{
			headers:{
				"Content-Type": "application/json"
			},
			method:"GET"
		});
	const data = await response.json();
    
	return {data};
};