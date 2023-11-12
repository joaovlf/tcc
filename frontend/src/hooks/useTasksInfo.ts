import { useState, useEffect } from "react";
import { taskService } from "../services";
import { useSearchParams } from "next/navigation";

export const useTasksInfo = () =>{
	const [taskList, setTaskList] = useState<Array<{uuid:string, name:string}>>([]);
	const params = useSearchParams();

	useEffect(() => {
		getAllTasksData(params.get("uuid") ?? "");
	}, [params]);
    
	const getAllTasksData = async (uuid:string) =>{
		const response = await taskService.getAllByProject(uuid);
		setTaskList(response.data);
	};

	return {taskList};
};