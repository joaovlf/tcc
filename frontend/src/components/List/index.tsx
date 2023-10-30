import {FC} from "react";
import { ListItem } from "./ListItem";

interface ListProps {
    items:Array<{name:string, uuid:string}>
}

export const List:FC<ListProps> = ({items}) => {
	return (
		<div className="px-lg py-xl bg-primary_500 rounded-sm">
			<p className="text-sm">Nome</p>
			<div className="flex flex-col gap-sm">
				{
					items.map(item => (
						<ListItem key={item.uuid}>
							<p className="text-neutral_light">
								{item.name}
							</p>
						</ListItem>
					)
					)
                
				}
			</div>
		</div>
	);
};
