import React, { HtmlHTMLAttributes } from "react";

interface InputProps extends HtmlHTMLAttributes<HTMLInputElement>{
    label:string;
}

export const Input:React.FC<InputProps> = ({label, ...rest}) => {
	return (
		<div className="flex flex-col w-full">
			<label className="text-sm text-neutral_light font-light" htmlFor="">{label}</label>
			<input  {...rest} className="bg-primary_500 h-lg rounded-sm border-primary_300 border-2 outline-none p-sm" type="text" />
		</div>
	);
};
