import { Avatar } from "@mui/material";
import Typography from "@src/components/Typography";
import React from "react";

function CommentAvatar() {
	return (
		<div>
			<Typography.BodySmall className="font-medium">
				Snehal Kumar Singh
			</Typography.BodySmall>
			<p className="text-xs text-slate-400">14 Oct 2023</p>
		</div>
	);
}

export default CommentAvatar;
