import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export interface RIChip {
	text?: string;
}

export namespace PIChip {}

export default function Chip(props: RIChip) {
	const { text } = props;
	const ref = useRef<HTMLDivElement>(null);
	const [isHovering, setIsHovering] = useState(false);

	useEffect(() => {
		const elem = ref.current;
		if (elem) {
			const e = elem as HTMLDivElement;
			const g = (verdict: boolean) => () => {
				setIsHovering(verdict);
			};
			const stH = g(true);
			const reH = g(false);

			e.addEventListener("mouseenter", stH);
			e.addEventListener("mouseleave", reH);

			return () => {
				e.removeEventListener("mouseenter", stH);
				e.removeEventListener("mouseleave", reH);
			};
		}
	}, []);

	

	return (
		<div
			style={{
				width: "max-content",
				borderRadius: 200,
				overflow: "hidden",
				position: "relative",
				border: isHovering ? "1px solid transparent" : "1px solid #B0BEC5",
			}}
			ref={ref}
		>
			<motion.div
				style={{
					padding: "8px 12px",
					fontWeight: 500,
				}}
				className="hover:bg-slate-50 cursor-pointer"
				animate={isHovering ? { y: "100%" } : { y: 0 }}
			>
				<p style={{ fontSize: 14 }}>{text}</p>
			</motion.div>
			<motion.div
				style={{
					padding: "8px 12px",
					fontWeight: 500,
					position: "absolute",
					zIndex: -1,
					top: "-100%",
				}}
				className="hover:bg-slate-50 cursor-pointer bg-rcBlue"
				animate={isHovering ? { top: "0", scale: 1.001 } : {}}
			>
				<p style={{ fontSize: 14, color: "white" }}>{text}</p>
			</motion.div>
		</div>
	);
}
