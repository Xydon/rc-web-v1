import React from "react";
import Icon from "./components/Icon/Icon";

type Variant = "success" | "warning" | "error";

export interface RIAlerts {
	variant: Variant;
	heading: string;
	children?: React.ReactNode;
}

export namespace PIAlerts {}

export default function Alerts(props: RIAlerts) {
	const { variant, heading, children } = props;

	const styleMap: Record<
		Variant,
		{ containerColor: string; bodyColor: string }
	> = {
		error: {
			containerColor: "#FFF1F2",
			bodyColor: "#E11D48",
		},
		success: {
			containerColor: "#F0FDF4",
			bodyColor: "#16A34A",
		},
		warning: {
			containerColor: "#FFFBEB",
			bodyColor: "#D97706",
		},
	};

	const currentStyle = styleMap[variant];

	return (
		<div
			className="w-full p-sys-24 rounded-lg"
			style={{ backgroundColor: currentStyle.containerColor }}
		>
			<div className="flex mb-sys-15 justify-between">
				<div>
					<p
						style={{
							fontSize: 16,
							fontWeight: 500,
							color: currentStyle.bodyColor,
						}}
					>
						{heading}
					</p>
				</div>
				<div>
					<Icon color={currentStyle.bodyColor} />
				</div>
			</div>

			<div>{children}</div>
		</div>
	);
}
