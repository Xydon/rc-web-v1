import SystemButtons from "@src/components/Buttons/System/SystemButtons";
import CommunityArticleCard from "@src/components/CommunityArticleCard/CommunityArticleCard";
import React from "react";

function EnhancedArticleCard() {
	return (
		<div className="border border-slate-300 rounded">
			<div className="mb-sys-9">
				{/* <CommunityArticleCard removeBorder /> */}
			</div>
			<div className="flex justify-end gap-x-3 px-3 pb-3">
				<SystemButtons.Regular>Accept</SystemButtons.Regular>
				<SystemButtons.Regular>Reject</SystemButtons.Regular>
			</div>
		</div>
	);
}

export default EnhancedArticleCard;
