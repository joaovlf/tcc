"use client";

import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Input } from "../../../components/Input";
import { AnimatePresence} from "framer-motion";
import { useUserInfo } from "../../../hooks/useUserInfo";
import { ChangeEvent } from "react";

export default function Page  () {
	const { submit, user, onChangeUserFormData } = useUserInfo();
	
	return (
		<AnimatePresence>
			<div className="flex  items-center justify-center bg-primary_800 gap-sm flex-col min-h-screen ">
				<Container title="Cadastrar">
					<Input id="name" defaultValue={user?.name} onChange={({target:{id, value}}:ChangeEvent<HTMLInputElement>)=>onChangeUserFormData(id,value)} label="Nome:"/>
					<Input id="userName" defaultValue={user?.userName} onChange={({target:{id, value}}:ChangeEvent<HTMLInputElement>)=>onChangeUserFormData(id,value)} label="Nome de Usuario:"/>
					<Input id="email" defaultValue={user?.email} onChange={({target:{id, value}}:ChangeEvent<HTMLInputElement>)=>onChangeUserFormData(id,value)} label="Email:"/>
					<Input id="password" defaultValue={user?.password} onChange={({target:{id, value}}:ChangeEvent<HTMLInputElement>)=>onChangeUserFormData(id,value)} label="Senha:"/>
					<Input id="confirmPassword" defaultValue={user?.confirmPassword} onChange={({target:{id, value}}:ChangeEvent<HTMLInputElement>)=>onChangeUserFormData(id,value)} label="Confirmar Senha:"/>
					<div className="flex flex-grow justify-center w-full flex-1">
						<Button onClick={()=>submit()}>Entrar</Button>
					</div>
				</Container>
			</div>
		</AnimatePresence>
	);
}
