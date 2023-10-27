import Typography from "@src/components/Typography";
import useHeight from "@src/modules/hooks/useHeight";
import React from "react";
import PaddingContainer from "../PaddingContainer/PaddingContainer";

interface Props {
	children?: React.ReactNode;
}

function ContentContainer(props: Props) {
	const { children } = props;

	const heightHandle = useHeight();

	return (
		<PaddingContainer>
			<div
				className="relative mb-1"
				ref={heightHandle.ref}
				style={{ maxHeight: 120, overflow: "hidden" }}
			>
				{children}
			</div>
			{heightHandle.height >= 120 && (
				<div className="flex justify-end cursor-pointer">
					<div className="p-2 rounded-sm">
						<Typography.Body>See More...</Typography.Body>
					</div>
				</div>
			)}
		</PaddingContainer>
	);
}

export default ContentContainer;
