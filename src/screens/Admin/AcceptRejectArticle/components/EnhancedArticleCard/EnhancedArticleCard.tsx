import Chip from "@src/components/ArticleCards/Base/Chip/Chip";
import AuthorAvatar from "@src/components/Avatars/AuthorAvatar/AuthorAvatar";
import SystemButtons from "@src/components/Buttons/System/SystemButtons";
import CommunityArticleCard from "@src/components/CommunityArticleCard/CommunityArticleCard";
import Divider from "@src/components/Post/components/Divider/Divider";
import Typography from "@src/components/Typography";
import React from "react";

function EnhancedArticleCard() {
	return (
		<div className="border border-slate-300 rounded" style={{ padding: 34, maxWidth: 1280 / 2.5, width: "100%" }}>
			<div className="mb-sys-39">
				<div>
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
							Subheading
						</Typography.Body>
						<div className="flex justify-between">
							<div>
								<Chip text="no category" />
							</div>
							<div>
								<SystemButtons.Regular onClick={() => {}}>
									View
								</SystemButtons.Regular>
							</div>
						</div>
					</div>

					<Divider />

					<div className="flex justify-between items-center mt-sys-24">
						<AuthorAvatar name={"Author"} sub={"date of creation"} />
						<div>
							<ul>
								<li className="">
									<Typography.BodySmall smaller className="text-slate-500">
										{4} Likes
									</Typography.BodySmall>
								</li>
								<li className="">
									<Typography.BodySmall smaller className="text-slate-500">
										{5} Comments
									</Typography.BodySmall>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-end gap-x-3 px-3 pb-3">
				<SystemButtons.Regular>Accept</SystemButtons.Regular>
				<SystemButtons.Regular>Reject</SystemButtons.Regular>
			</div>
		</div>
	);
}

export default EnhancedArticleCard;
