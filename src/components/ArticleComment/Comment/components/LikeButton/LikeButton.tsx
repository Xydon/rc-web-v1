import { ButtonBase } from "@mui/material";
import AssetIndex from "@src/assets/AssetIndex";
import Typography from "@src/components/Typography";
import React, { useState } from "react";

interface Props {
	initialLikes?: number;
	onClick?: () => Promise<void>;
}

function LikeButton(props: Props) {
	const { initialLikes = 0, onClick = async () => {} } = props;

	const [likes, setLikes] = useState(initialLikes);

	return (
		<div className="flex gap-x-2 items-center">
			<div>
				<ButtonBase
					style={{ borderRadius: "5000px", padding: "12px" }}
					onClick={() => {}}
				>
					<AssetIndex.ThumbsUp />
				</ButtonBase>
			</div>
			<div>
				<p className="font-semibold text-sm">{likes}</p>
			</div>
		</div>
	);
}

export default LikeButton;
