import { Spinner, SpinnerProps } from "flowbite-react";
import React, { useState } from "react";

export interface RIRegular {
	textColorClassName?: string;
	bgColorClassName?: string;
	borderColorClassName?: string;
	children?: React.ReactNode;
	interactionType?: "shrink" | "border";
	onClick?: () => void;
	limit?: number;
	loading?: boolean;
	spinnerProps?: SpinnerProps;
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
		limit = 500,
		loading = false,
		spinnerProps,
	} = props;

	const [click, setClick] = useState(0);

	return (
		<div>
			<button
				onClick={() => {
					setClick((v) => v + 1);
					click < limit && onClick && onClick();
				}}
				style={{ padding: "8px 24px", borderRadius: 6, fontSize: 14 }}
				className={` ${textColorClassName} border ${bgColorClassName} ${borderColorClassName} font-medium ${
					interactionType === "shrink"
						? "active:scale-95"
						: "active:brightness-95 focus:outline focus:outline-violet-300 focus:outline-offset-2"
				} active:brightness-100 hover:brightness-105 transition-all`}
			>
				{loading ? <Spinner {...spinnerProps} /> : children}
			</button>
			{click >= limit && (
				<p className="text-red-500" style={{ fontSize: 10 }}>
					you have clicked too many times
				</p>
			)}
		</div>
	);
}
