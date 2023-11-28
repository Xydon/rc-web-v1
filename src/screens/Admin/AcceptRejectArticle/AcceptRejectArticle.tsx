import { Divider } from "@mui/material";
import CommunityArticleCard from "@src/components/CommunityArticleCard/CommunityArticleCard";
import Layout from "@src/components/Layout/Layout";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import { TextInput } from "flowbite-react";
import React from "react";
import EnhancedArticleCard from "./components/EnhancedArticleCard/EnhancedArticleCard";

function AcceptRejectArticle() {
	return (
		<Layout>
			<ResponsiveContainer>
				<div className="flex justify-between items-center">
					<div>
						<Typography.H2 className="mb-sys-9">
							Accept/Reject Article
						</Typography.H2>
						<Typography.Body className="text-zinc-500 max-w-2xl mb-sys-39">
							Use this page to either accept or reject an article, you can view
							the article by clicking on the view button
						</Typography.Body>
					</div>

					<div className="flex gap-y-1 flex-col">
						<TextInput className="" placeholder="enter search query..." />
						<Typography.Body className="text-zinc-500">
							300 Articles
						</Typography.Body>
					</div>
				</div>
				<div className="mb-sys-39">
					<Divider />
				</div>

				<div className="flex gap-4 flex-wrap" style={{ marginBottom: 56 }}>
					<EnhancedArticleCard />
					<EnhancedArticleCard />
					<EnhancedArticleCard />
				</div>
			</ResponsiveContainer>
		</Layout>
	);
}

export default AcceptRejectArticle;
