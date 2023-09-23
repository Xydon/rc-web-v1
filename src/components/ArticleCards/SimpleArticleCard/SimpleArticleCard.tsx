import React from "react";
import CardContainer from "../Base/CardContainer/CardContainer";
import PaddingContainer from "../Base/PaddingContainer/PaddingContainer";
import Divider from "../Base/Divider/Divider";
import Typography from "@src/components/Typography";
import getTrimmedString from "./services/getTrimmedString";
import Chip from "../Base/Chip/Chip";
import SystemButtons from "@src/components/Buttons/System/SystemButtons";
import PostMetadata from "@src/components/MetadataComponents/PostMetadata/PostMetadata";

export interface RIReviewList {
	children?: React.ReactNode;
	data: {
		heading: string;
		byLine?: string;
		category?: string;
		onDiscard?: () => void;
		onView?: () => void;
	};
}

export namespace PIReviewList {}

export default function SimpleArticleCard(props: RIReviewList) {
	const { children, data } = props;
	const { heading, byLine = "", category, onDiscard, onView } = data;
	return (
		<CardContainer>
			<PaddingContainer>
				<div className="flex flex-row justify-between">
					<div className="mb-sys-24">
						<Typography.BodyLarge className="mb-sys-">
							{heading}
						</Typography.BodyLarge>
						{getTrimmedString(
							byLine,
							30,
							(t) => (
								<p
									style={{ fontSize: 16, lineHeight: "130%" }}
									className="text-zinc-500"
								>
									{t}
								</p>
							),
							() => (
								<p
									style={{ fontSize: 14, lineHeight: "130%" }}
									className="text-zinc-800"
								>
									...
								</p>
							)
						)}
					</div>
				</div>
				<div className="flex flex-row justify-between">
					<div>{category && <Chip text={category} />}</div>
					<div className="w-auto ">
						<SystemButtons.Regular>View</SystemButtons.Regular>
					</div>
				</div>
			</PaddingContainer>
			<Divider />
			<PaddingContainer >
				<PostMetadata></PostMetadata>
			</PaddingContainer>
		</CardContainer>
	);
}
