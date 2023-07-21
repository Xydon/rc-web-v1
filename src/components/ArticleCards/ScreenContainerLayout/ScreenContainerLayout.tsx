import React from "react";

export interface RIScreenContainerLayout {
	children?: React.ReactNode;
}

export namespace PIScreenContainerLayout {}

export default function ScreenContainerLayout(props: RIScreenContainerLayout) {
	return (
		<div className="flex flex-col lg:flex-row gap-[8px] lg:gap-[12px] flex-wrap">
			{props.children}
		</div>
	);
}

export function Box({ children }: { children: React.ReactNode }) {
	return (
		<div style={{ flexBasis: "calc(50% - 24px)", maxWidth: 720 }}>
			{children}
		</div>
	);
}
