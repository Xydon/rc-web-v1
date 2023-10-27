import React from "react";

interface Props {
	children?: React.ReactNode;
	vertical?: boolean;
	horizontal?: boolean;
}

function PaddingContainer({
	children,
	vertical = true,
	horizontal = true,
}: Props) {
	const cname =
		(vertical ? "py-[12px] lg:py-[28px] " : "") +
		(horizontal ? " px-[12px] lg:px-[28px]" : "");
	return <div className={cname}>{children}</div>;
}

export default PaddingContainer;
