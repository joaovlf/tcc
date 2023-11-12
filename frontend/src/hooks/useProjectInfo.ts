import { useEffect, useState } from "react";
import { projectService } from "../services";

export const useProjectInfo = () => {
	const [projectList, setProjectList] = useState([]);
	useEffect(() => {
		getAllProjects();
	}, []);
    
	const getAllProjects = async () => {
		const response = await projectService.listProjectService();
		setProjectList(response.data);
	};

	const createQueryString = (name:string, value:string) => {
		const params = new URLSearchParams();
		params.set(name, value);

		return params.toString();
	};


	return { projectList, createQueryString };
};