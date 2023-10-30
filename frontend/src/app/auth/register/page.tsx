"use client";

import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Input } from "../../../components/Input";
import { AnimatePresence} from "framer-motion";
import { useUserInfo } from "../../../hooks/useUserInfo";

export default function Page  () {
	const { submit } = useUserInfo();
	return (
		<AnimatePresence>
			<div className="flex  items-center justify-center bg-primary_800 gap-sm flex-col min-h-screen ">
				<Container title="Cadastrar">
					<Input label="Email:"/>
					<Input label="Senha:"/>
					<Input label="Confirmar Senha:"/>
					<div className="flex flex-grow justify-center w-full flex-1">
						<Button onClick={()=>submit()} style={{maxWidth:200, width:"100%"}}>Entrar</Button>
					</div>
				</Container>
			</div>
		</AnimatePresence>
	);
}
