import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import React from "react";
import CommunityArticleCard from "../../../../components/CommunityArticleCard/CommunityArticleCard";
import SystemButtons from "@src/components/Buttons/System/SystemButtons";

function CommunityArticles() {
	return (
		<ResponsiveContainer>
			<div className="mb-4 md:mb-10">
				<Typography.H2 className="font-medium">
					Community Articles
				</Typography.H2>
			</div>
			<div className="flex gap-4 flex-wrap" style={{ marginBottom: 56 }}>
				{/* <CommunityArticleCard />
				<CommunityArticleCard />
				<CommunityArticleCard />
				<CommunityArticleCard />
				<CommunityArticleCard /> */}
			</div>

			<div className="flex justify-end">
				<SystemButtons.Regular bgColorClassName="bg-indigo-500" textColorClassName="text-white">
          View More -{'>'}
        </SystemButtons.Regular>
			</div>
		</ResponsiveContainer>
	);
}

export default CommunityArticles;
