"use client";
import React from "react";
import { Container } from "../../../components/Container";
import { useTasksInfo } from "../../../hooks/useTasksInfo";

export default function Page() {
	
	const { taskList } = useTasksInfo();

	

	return (
		<div className="flex h-screen items-start justify-center bg-primary_800 gap-xxxl flex-col flex-1 min-h-screen px-xxl">
			<div className="w-full">
				<Container style={{width:"100%"}}>
					{taskList.map(e=>(
						<div key={e.uuid}>{e.name}</div>
					))}
				</Container>
			</div>
            
		</div>
	);
}
