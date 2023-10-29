import React from "react";

interface Props {
	children?: React.ReactNode;
	maxWidth?: number;
}

function Container(props: Props) {
	const { children, maxWidth = 420 } = props;

	return (
		<div
			className="w-full border border-slate-200 rounded-md"
			style={{ maxWidth }}
		>
			{children}
		</div>
	);
}

export default Container;
