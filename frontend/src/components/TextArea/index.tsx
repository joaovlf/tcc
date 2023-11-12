import {HtmlHTMLAttributes, FC} from "react";

interface TextAreaProps extends HtmlHTMLAttributes<HTMLTextAreaElement> {
label:string;
}
export const TextArea:FC<TextAreaProps> = ({label, id, ...rest}) => {
	return (
		<div className="flex flex-col ">
			<label className="text-sm text-neutral_light" htmlFor={id}>{label}</label>
			<textarea id={id} {...rest} className=" outline-none p-sm bg-primary_500 rounded-sm border-primary_300 border-2 h-giant"/>
		</div>
	);
};
