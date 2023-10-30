import { ReactNode, FC } from "react";

interface ListItemProp{
    children:ReactNode
}

export const ListItem:FC<ListItemProp> = ({children}) => {
	return (
		<div className="p-sm shadow-md bg-primary rounded-sm">
			{children}
		</div>
	);
};
