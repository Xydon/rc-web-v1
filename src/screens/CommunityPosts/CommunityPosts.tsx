import SystemButtons from "@src/components/Buttons/System/SystemButtons";
import Layout from "@src/components/Layout/Layout";
import Post from "@src/components/Post/Post";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import React, { useEffect, useState } from "react";
import ServerActions from "./actions/ServerActions";
import { useAuthGuardContext } from "@src/AuthGuard/AuthGuard";
import UnAuthPage from "@src/AuthGuard/components/UnAuthPage/UnAuthPage";

function CommunityPosts() {
	const [state, setState] = useState<CommunityPosts.State>({
		posts: [],
		loading: {},
	});

	const serverActions = new ServerActions(state, setState);
	const { userDetails } = useAuthGuardContext();

	useEffect(() => {
		if (userDetails) serverActions.fetch(userDetails.id);
	}, []);

	if (!userDetails) {
		return <UnAuthPage />;
	}

	return (
		<Layout>
			<ResponsiveContainer>
				<div style={{ marginBottom: 80 }}>
					<div className="flex gap-y-8 flex-col md:flex-row md:justify-between md:items-center ">
						<div>
							<Typography.H2>RC Community</Typography.H2>
							<Typography.Body className="text-rcBluePrimary">
								{state.posts.length} posts
							</Typography.Body>
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
					{state.posts.map((v, i) => (
						<Post
							maxWidth={650}
							data={v}
							onComment={(e) => {
								serverActions.createComment(
									{ userId: userDetails.id, postId: v.id, content: e },
									userDetails.name,
									i
								);
							}}
							onLike={() => {
								serverActions.likePost(
									{ userId: userDetails.id, postId: v.id },
									i
								);
							}}
						/>
					))}
				</div>
			</ResponsiveContainer>
		</Layout>
	);
}

export default CommunityPosts;
