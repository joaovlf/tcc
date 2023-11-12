"use client";
import React from "react";
import { Container } from "../../../components/Container";
import { List } from "../../../components/List";
import { useProjectInfo } from "../../../hooks/useProjectInfo";
import { useRouter } from "next/navigation";

export default function Page() {
	const { projectList, createQueryString} = useProjectInfo();
	const router = useRouter();

	return (
		<div className="flex h-screen items-start justify-center bg-primary_800 gap-xxxl flex-col flex-1 min-h-screen px-xxl">
			<Container style={{width:"100%"}}>
				<h1 className="text-neutral_light text-lg"></h1>
				<div className="bg-primary_800 p-xxl flex flex-col gap-xxl rounded-sm	">
					<List title="Nome dos projetos" onClickVisualize={(uuid)=>router.push("/project/sprints" + "?" + createQueryString("uuid", uuid as string))} items={projectList}/>
				</div>
			</Container>
		</div>
	);
}
