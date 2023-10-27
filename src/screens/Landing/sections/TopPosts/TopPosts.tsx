import Post from "@src/components/Post/Post";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import React from "react";

function TopPosts() {
	return (
		<ResponsiveContainer>
			<div className="mb-4 md:mb-10">
				<Typography.H2 className="font-medium">Top Posts</Typography.H2>
			</div>
			<Post/>
		</ResponsiveContainer>
	);
}

export default TopPosts;
