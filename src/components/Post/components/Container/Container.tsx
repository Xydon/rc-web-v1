import React from "react";

interface Props {
	children?: React.ReactNode;
}

function Container(props: Props) {
	const { children } = props;

	return (
		<div className="max-w-[550px] w-full border border-slate-200 rounded-md">
			{children}
		</div>
	);
}

export default Container;
