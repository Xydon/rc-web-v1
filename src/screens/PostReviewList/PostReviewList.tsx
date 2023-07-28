import Navbar from "@src/components/Navbar/Navbar";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import useHeight from "@src/modules/hooks/useHeight";
import React from "react";
import ReviewPostCard from "./components/ReviewPostCard/ReviewPostCard";

export interface RIPostReviewList {}

export namespace PIPostReviewList {}

export default function PostReviewList(props: RIPostReviewList) {
	const heightHandle = useHeight();
	return (
		<div>
			<div ref={heightHandle.ref}>
				<Navbar />
			</div>
			<div
				style={{
					maxHeight: `calc( 100vh - ${heightHandle.height}px )`,
					overflow: "auto",
					paddingTop: 63,
					paddingBottom: 63,
				}}
			>
				<ResponsiveContainer>
					<div className="mb-sys-63">
						<Typography.H2>Post Review List</Typography.H2>
					</div>
					<ReviewPostCard />
				</ResponsiveContainer>
			</div>
		</div>
	);
}
