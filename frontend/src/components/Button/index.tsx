import { CSSProperties, FC, HtmlHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HtmlHTMLAttributes<HTMLButtonElement>{
    children:ReactNode;
    style?:CSSProperties;
}

export const Button: FC<ButtonProps> = ({children, ...rest}) => {
	return (
		<button {...rest} className="bg-gradient-to-br from-secondary to-90% w-full  p-xs rounded-xs  shadow-md ">
			{children}
		</button>
	);
};
