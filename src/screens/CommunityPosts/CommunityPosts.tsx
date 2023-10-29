import SystemButtons from "@src/components/Buttons/System/SystemButtons";
import Layout from "@src/components/Layout/Layout";
import Post from "@src/components/Post/Post";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import React from "react";

function CommunityPosts() {
	return (
		<Layout>
			<ResponsiveContainer>
				<div style={{ marginBottom: 80 }}>
					<div className="flex gap-y-8 flex-col md:flex-row md:justify-between md:items-center ">
						<div>
							<Typography.H2>RC Community</Typography.H2>
							<Typography.Body className="text-rcBluePrimary">32 posts</Typography.Body>
						</div>
						<div>
							<SystemButtons.Regular
								textColorClassName="text-white"
								bgColorClassName="bg-rcGreenPrimary"
							>
								Create Post
							</SystemButtons.Regular>
						</div>
					</div>
				</div>

				<div className="flex flex-col gap-5 items-center">
					<Post maxWidth={650} />
					<Post maxWidth={650} />
					<Post maxWidth={650} />
				</div>
			</ResponsiveContainer>
		</Layout>
	);
}

export default CommunityPosts;
