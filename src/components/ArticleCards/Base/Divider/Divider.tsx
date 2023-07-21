import React from "react";

export interface RIDivider {
	verticalOffset?: number;
}

export namespace PIDivider {}

export default function Divider(props: RIDivider) {
	const { verticalOffset } = props;
	return (
		<div
			className="w-full bg-slate-300"
			style={{
				height: 0.8,
				paddingTop: verticalOffset,
				paddingBottom: verticalOffset,
			}}
		/>
	);
}
