"use client";
import {FC} from "react";
import { ListItem } from "./ListItem";

interface ListProps {
    items:Array<{name:string, uuid:string}>,
	title?:string;
	onClickExclude?:<T>(data:T)=> void;
	onClickVisualize?:<T>(data:T)=>void
}

export const List:FC<ListProps> = ({items, title="Nome", onClickVisualize, onClickExclude}) => {
	return (
		<div className="px-lg py-xl bg-primary_500 rounded-sm">
			<p className="text-sm">{title}</p>
			<div className="flex flex-col gap-sm">
				{
					items.map(item => (
						<ListItem key={item.uuid}>
							<div className="flex justify-between">
								<div>
									<p className="text-neutral_light">
										{item.name}
									</p>
								</div>
								<div className="flex gap-sm">
									<button onClick={()=>onClickVisualize && onClickVisualize<string>(item.uuid)} className="bg-none border-none">
										visualizar
									</button>
									<button onClick={()=>onClickExclude && onClickExclude<string>(item.uuid)} className="bg-none border-none">
										excluir
									</button>
								</div>
							</div>
						</ListItem>
					))
				}
			</div>
		</div>
	);
};
