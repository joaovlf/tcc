export const getAllByProject = async (projectUuid:string) =>{
 
	const response = await fetch(`http://localhost:8000/api/task/list/${projectUuid}`,
		{
			headers:{
				"Content-Type": "application/json"
			},
			method:"GET"
		});
	const data = await response.json();
    
	return {data};

};