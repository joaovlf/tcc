import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { List } from "../../components/List";

export default function Page  () {
	return (
		<div className="flex h-screen items-start justify-center bg-primary_800 gap-xxxl flex-col flex-1 min-h-screen px-xxl">
			<Container style={{width:"100%", justifyContent:"center", alignItems:"center"}} variant="light" title="Bem Vindo $Nome_Do_Cliente">
				<div className="flex flex-col gap-xxxl">
					<Container style={{padding:20, fontSize:32}} variant="dark">
						<div className=" flex flex-col items-center p-md justify-center">
							<p className=" w-full text-md">Bem vindo Nome_De_usuario</p>
						</div>
						<List items={[{name:"projeto 1", uuid:"1"}, {name:"projeto 2", uuid:"2"}]}/>
					</Container>
				</div>
			</Container>
			<div className="flex gap-xs">
				<Button style={{padding:"6px 15px"}}>1</Button>
				<Button style={{padding:"6px 15px"}}>2</Button>
				<Button style={{padding:"6px 15px"}}>3</Button>
			</div>
		</div>
	);
}
