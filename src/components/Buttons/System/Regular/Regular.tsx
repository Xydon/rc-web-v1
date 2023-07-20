import React from "react";

export interface RIRegular {
	textColorClassName?: string;
	bgColorClassName?: string;
	borderColorClassName?: string;
	children?: React.ReactNode;
	interactionType?: "shrink" | "border";
	onClick?: () => void;
}

export namespace PIRegular {}

export default function Regular(props: RIRegular) {
	const {
		textColorClassName = "text-slate-800",
		bgColorClassName = "",
		onClick,
		borderColorClassName = "border-slate-300",
		children,
		interactionType = "border",
	} = props;

	return (
		<button
			onClick={() => {
				onClick && onClick();
			}}
			style={{ padding: "8px 24px", borderRadius: 6, fontSize: 14 }}
			className={` ${textColorClassName} border ${bgColorClassName} ${borderColorClassName} font-medium ${
				interactionType === "shrink"
					? "active:scale-95"
					: "active:brightness-95 focus:outline focus:outline-violet-300 focus:outline-offset-2"
			} active:brightness-100 hover:brightness-105 transition-all`}
		>
			{children}
		</button>
	);
}
