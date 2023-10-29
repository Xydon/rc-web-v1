import Typography from "@src/components/Typography";
import useHeight from "@src/modules/hooks/useHeight";
import React, { useState } from "react";
import PaddingContainer from "../PaddingContainer/PaddingContainer";

interface Props {
	children?: React.ReactNode;
	maxHeight?: number;
}

function ContentContainer(props: Props) {
	const { children, maxHeight = 120 } = props;

	const heightHandle = useHeight();
	const [state, setState] = useState(false);

	return (
		<>
			<div
				className="relative mb-1"
				ref={heightHandle.ref}
				style={{
					maxHeight: state ? "max-content" : maxHeight,
					overflow: "hidden",
					transition: "max-height 1s",
				}}
			>
				{children}
			</div>
			{heightHandle.height >= maxHeight && (
				<div className="flex justify-end cursor-pointer">
					<div
						className="p-2 rounded-sm"
						onClick={() => {
							setState((p) => !p);
						}}
					>
						{state ? (
							<Typography.Body>Hide...</Typography.Body>
						) : (
							<Typography.Body>See More...</Typography.Body>
						)}
					</div>
				</div>
			)}
		</>
	);
}

export default ContentContainer;
