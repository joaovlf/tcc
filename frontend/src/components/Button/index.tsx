import { CSSProperties, FC, HtmlHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement>{
    children:ReactNode;
    style?:CSSProperties;
}

export const Button: FC<ButtonProps> = ({children, ...rest}) => {
	return (
		<button {...rest} className="bg-gradient-to-b from-secondary to-secondary_800 p-xs rounded-xs  shadow-md ">
			{children}
		</button>
	);
};
