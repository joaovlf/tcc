"use client";

import React, { CSSProperties, ReactNode } from "react";
import {motion} from "framer-motion";

interface ContainerProps {
    title?:string;
    children:ReactNode;
    variant?:"dark" | "light";
    style?:CSSProperties;
}

export const Container:React.FC<ContainerProps> = ({title, children, variant="light", style}) => {
	return (
		<motion.div 
			initial={{opacity:0}} 
			animate={{opacity:1}}
			transition={{duration:0.3}} 
			className={`
            bg-${variant === "light" ? "primary" : "primary_800"} " " gap-xl flex flex-col h-fit py-xxxl px-xxl rounded-lg w-lg shadow-md max-w-full`}
			style={{...style}}
		>
			{title && (
				<div className="w-full text-center">
					<h1 className="text-lg font-medium text-neutral_light" style={{fontSize:style?.fontSize}}>{title}</h1>
				</div>
			)}
			<div className="flex  gap-xl flex-col">
				{children}
			</div>
		</motion.div>
	);
};
