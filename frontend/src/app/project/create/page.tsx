import React from "react";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { TextArea } from "../../../components/TextArea";

export default function Page() {
	return (
		<div className="flex h-screen items-start justify-center bg-primary_800 gap-xxxl flex-col flex-1 min-h-screen px-xxl">
			<div className="w-full flex flex-col gap-xxl">
				<h1 className="text-lg text-center ">Novo Projeto</h1>
				<div className="flex gap-xxl flex-col">
					<div className="flex gap-xs w-full">
						<Input label="Participantes"/>
						<Input label="Nome"/>
					</div>
					<TextArea label="Descrição" id="description"/>
				</div>
			</div>
			<Button>
                Cadastrar
			</Button>
		</div>
	);
}
