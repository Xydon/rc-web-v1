import React from "react";

export interface RIResponsiveContainer {
	children?: React.ReactNode;
}

export namespace PIResponsiveContainer {}

export default function ResponsiveContainer(props: RIResponsiveContainer) {
	return (
		<div
			className={"px-[32px] md:px-[80px] xl:px-[200px] bg-transparent"}
		>
			{props.children}
		</div>
	);
}
