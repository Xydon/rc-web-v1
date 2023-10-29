import Typography from "@src/components/Typography";
import React from "react";
import LikeButton from "./components/LikeButton/LikeButton";
import CommentAvatar from "./components/CommentAvatar/CommentAvatar";
import { Avatar } from "@mui/material";

function Comment() {
	return (
		<div className="flex items-start gap-x-4 pr-3">
			<Avatar />
			<div className="grow">
				<div className="flex items-start justify-between" style={{ columnGap: "0%" }}>
					<CommentAvatar />
					<LikeButton />
				</div>
				<div style={{ width: "80%" }}>
					<Typography.BodySmall className="font-light">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem, at.
					</Typography.BodySmall>
				</div>
			</div>
		</div>
	);
}

export default Comment;
