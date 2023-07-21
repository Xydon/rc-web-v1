import React from "react";

export interface RICardContainer {
	children?: React.ReactNode;
}

export namespace PICardContainer {}

export default function CardContainer(props: RICardContainer) {
	const { children } = props;
	return (
		<div className="w-full border border-slate-300" style={{ borderRadius: 4 }}>
			{children}
		</div>
	);
}
