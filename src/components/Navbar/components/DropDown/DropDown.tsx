import { ClickAwayListener } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

export interface RIDropDown {
	text: string;
	DropDownNode?: React.ReactNode;
}

export namespace PIDropDown {}

export default function DropDown(props: RIDropDown) {
	const { text } = props;
	const ref = useRef<HTMLDivElement>(null);
	const [showDD, setShowDD] = useState(false);

	useEffect(() => {
		const elemRef = ref.current;
		if (elemRef) {
			const elem = elemRef as HTMLDivElement;

			const showHandler = () => {
				setShowDD(true);
			};
			const hideHandler = () => {
				setShowDD(false);
			};

			elem.addEventListener("mouseenter", showHandler);
			elem.addEventListener("mouseleave", hideHandler);

			return () => {
				elem.removeEventListener("mouseenter", showHandler);
				elem.removeEventListener("mouseleave", hideHandler);
			};
		}
	}, []);

	return (
		<ClickAwayListener
			onClickAway={function (event: MouseEvent | TouchEvent): void {
				setShowDD(false);
			}}
		>
			<div
				className="cursor-pointer px-3 relative"
				ref={ref}
				onClick={() => {
					setShowDD(true);
				}}
			>
				<p className="text-small font-medium text-slate-700">{text}</p>
				{showDD && (
					<div
						style={{ position: "absolute", top: "90%", paddingTop: 8, left: 0 }}
					>
						{props.DropDownNode}
					</div>
				)}
			</div>
		</ClickAwayListener>
	);
}
