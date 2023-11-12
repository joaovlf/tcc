"use client";

import { Button } from "../../../components/Button";
import { Container } from "../../../components/Container";
import { Input } from "../../../components/Input";
import { AnimatePresence} from "framer-motion";

export default function Page  () {
	return (
		<AnimatePresence>
			<div className="flex  items-center justify-center bg-primary_800 gap-sm flex-col min-h-screen ">
				<Container title="Login">
					<Input label="Email:"/>
					<Input label="Senha:"/>
					<div className="flex flex-grow justify-center w-full flex-1">
						<Button>Entrar</Button>
					</div>
				</Container>
			</div>
		</AnimatePresence>
	);
}
