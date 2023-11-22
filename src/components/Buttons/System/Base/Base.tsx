import { Spinner, SpinnerProps } from "flowbite-react";
import React, { useState } from "react";

export interface RIRegular {
	textColorClassName?: string;
	bgColorClassName?: string;
	borderColorClassName?: string;
	children?: React.ReactNode;
	interactionType?: "shrink" | "border";
	limit?: number;
	loading?: boolean;
	spinnerProps?: SpinnerProps;
}

export namespace PIRegular {}

export default function Regular(
	props: RIRegular & React.HTMLAttributes<HTMLButtonElement>
) {
	const {
		textColorClassName = "text-slate-800",
		bgColorClassName = "",
		borderColorClassName = "border-slate-300",
		children,
		interactionType = "border",
		limit = 500,
		loading = false,
		spinnerProps,
		...rest
	} = props;

	const [click, setClick] = useState(0);

	rest.className += ` ${textColorClassName} border ${bgColorClassName} ${borderColorClassName} font-medium ${
		interactionType === "shrink"
			? "active:scale-95"
			: "active:brightness-95 focus:outline focus:outline-violet-300 focus:outline-offset-2"
	} active:brightness-100 hover:brightness-105 transition-all `;
	rest.style = {
		...rest.style,
		cursor: loading || (rest.onClick && click >= limit) ? "not-allowed" : "pointer",
		filter: loading || (rest.onClick && click >=limit) ? "brightness(0.8)" : "brightness(1)",
	};

	return (
		<>
			<button
				{...rest}
				onClick={(e) => {
					console.log(click, limit);
					rest.onClick && setClick((v) => v + 1);
					rest.onClick && !loading && click < limit && rest.onClick(e);
				}}
			>
				{loading ? <Spinner {...spinnerProps} /> : children}
			</button>
			{click >= limit && (
				<p
					className="text-red-600 font-medium mt-1 select-none"
					style={{ fontSize: 12 }}
				>
					you have clicked too many times
				</p>
			)}
		</>
	);
}
