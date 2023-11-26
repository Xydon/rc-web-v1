import { Avatar } from "@mui/material";
import Typography from "@src/components/Typography";
import React from "react";

interface Props {
	userName: string;
	userId: string;
	postedOn: string;
}

function CommentAvatar(props: Props) {
	return (
		<div>
			<Typography.BodySmall className="font-medium">
				{props.userName}
			</Typography.BodySmall>
			<p className="text-xs text-slate-400">{props.postedOn}</p>
		</div>
	);
}

export default CommentAvatar;
