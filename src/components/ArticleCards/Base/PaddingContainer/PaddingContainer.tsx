import React from "react";

export interface RIPaddingContainer {
	children?: React.ReactNode;
}

export namespace PIPaddingContainer {}

export default function PaddingContainer(props: RIPaddingContainer) {
	const { children } = props;

	return <div className="p-4 lg:p-6">{children}</div>;
}
