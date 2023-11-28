import Typography from "@src/components/Typography";
import React from "react";
import LikeButton from "./components/LikeButton/LikeButton";
import CommentAvatar from "./components/CommentAvatar/CommentAvatar";
import { Avatar } from "@mui/material";

interface Commentformat {
	id: string;
	userName: string;
	userId: string;
	postedOn: string;
	content: string;
}

function Comment(props: { data: Commentformat }) {
	const { data } = props;

	return (
		<div className="flex items-start gap-x-4 pr-3">
			<Avatar />
			<div className="grow">
				<div
					className="flex items-start justify-between mb-2"
					style={{ columnGap: "0%" }}
				>
					<CommentAvatar
						userName={data.userName}
						userId={data.userId}
						postedOn={data.postedOn}
					/>
					{/* <LikeButton /> */}
				</div>
				<div style={{ width: "80%" }}>
					<Typography.BodySmall className="font-light">
						{data.content}
					</Typography.BodySmall>
				</div>
			</div>
		</div>
	);
}

export default Comment;
