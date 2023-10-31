import React, { HtmlHTMLAttributes } from "react";

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement>{
    label:string;
}

export const Input:React.FC<InputProps> = ({label, ...rest}) => {
	return (
		<div className="flex flex-col w-full">
			<label className="text-md text-neutral_light font-light" htmlFor="">{label}</label>
			<input  {...rest} className="bg-primary_500 h-lg rounded-sm" type="text" />
		</div>
	);
};
