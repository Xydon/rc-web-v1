import React from "react";

export interface RIResponsiveContainer {
	children?: React.ReactNode;
}

export namespace PIResponsiveContainer {}

export default function ResponsiveContainer(
	props: RIResponsiveContainer & React.HTMLAttributes<HTMLDivElement>
) {
	const { children, ...rest } = props;

	return (
		<div
			{...rest}
			className={"px-[32px] md:px-[80px] xl:w-[1280px] mx-auto bg-transparent"}
		>
			{children}
		</div>
	);
}
