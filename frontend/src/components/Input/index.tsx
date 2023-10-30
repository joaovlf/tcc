import React from "react";

interface InputProps{
    label:string;
}

export const Input:React.FC<InputProps> = ({label}) => {
	return (
		<div className="flex flex-col w-full">
			<label className="text-md text-neutral_light font-light" htmlFor="">{label}</label>
			<input className="bg-primary_500 h-lg rounded-sm" type="text" />
		</div>
	);
};