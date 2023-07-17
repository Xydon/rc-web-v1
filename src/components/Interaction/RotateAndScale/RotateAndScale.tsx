import { motion } from "framer-motion";
import React from "react";

const abs = (n: number) => {
	if (n < 0) return n;
	else return n;
};

interface Props {
	config?: {
		scale?: number;
		rotate?: number;
		onClick?: () => void;
	};
	children?: React.ReactNode;
	style?: React.CSSProperties;
}

export default function RotateAndScale({
	config = { scale: 1.1, rotate: 360 },
	children,
	style,
}: Props) {
	const { scale, rotate } = config;
	return (
		<motion.div
			whileHover={{ scale, rotate }}
			whileTap={{ scale: abs(1 - abs((scale as number) - 1)) }}
			className="cursor-pointer w-fit"
			onClick={config.onClick}
			style={style}
		>
			{children}
		</motion.div>
	);
}
