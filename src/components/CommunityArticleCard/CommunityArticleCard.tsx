import Chip from "@src/components/ArticleCards/Base/Chip/Chip";
import Divider from "@src/components/ArticleCards/Base/Divider/Divider";
import AuthorAvatar from "@src/components/Avatars/AuthorAvatar/AuthorAvatar";
import SystemButtons from "@src/components/Buttons/System/SystemButtons";
import Typography from "@src/components/Typography";
import React from "react";

interface Props {
	removeBorder?: boolean;
}

function CommunityArticleCard(props: Props) {
	return (
		<div
			className={`rounded  ${
				props.removeBorder
					? ""
					: "border border-slate-300 hover:shadow-xl transition-shadow"
			} `}
			style={{ padding: 34, maxWidth: 1280 / 2.5, width: "100%" }}
		>
			<div className="border-b border-slate-300 pb-6">
				<Typography.BodyLarge
					className="font-medium"
					style={{ marginBottom: 8 }}
				>
					Heading
				</Typography.BodyLarge>
				<Typography.Body
					className="text-slate-500"
					style={{ marginBottom: 24 }}
				>
					Boost up your chances of selection by following some simple tips
				</Typography.Body>
				<div className="flex justify-between">
					<div>
						<Chip text="category" />
					</div>
					<div>
						<SystemButtons.Regular>View</SystemButtons.Regular>
					</div>
				</div>
			</div>

			<Divider />

			<div className="flex justify-between items-center mt-sys-24">
				<AuthorAvatar />
				<div>
					<ul>
						<li className="">
							<Typography.BodySmall smaller className="text-slate-500">
								14 Likes
							</Typography.BodySmall>
						</li>
						<li className="">
							<Typography.BodySmall smaller className="text-slate-500">
								3 Comments
							</Typography.BodySmall>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default CommunityArticleCard;
