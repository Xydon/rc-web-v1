import React from "react";
import CardContainer from "../Base/CardContainer/CardContainer";
import PaddingContainer from "../Base/PaddingContainer/PaddingContainer";
import Divider from "../Base/Divider/Divider";
import Typography from "@src/components/Typography";
import getTrimmedString from "./services/getTrimmedString";
import Chip from "../Base/Chip/Chip";
import SystemButtons from "@src/components/Buttons/System/SystemButtons";

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

export default function ReviewList(props: RIReviewList) {
	const { children, data } = props;
	const { heading, byLine = "", category, onDiscard, onView } = data;
	return (
		<CardContainer>
			<PaddingContainer>
				<Typography.BodyLarge className="mb-sys-">
					{heading}
				</Typography.BodyLarge>
				<div className="mb-sys-24">
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
				<div>{category && <Chip text={category} />}</div>
			</PaddingContainer>
			<Divider />
			<PaddingContainer>
				<div className="mb-sys-15">{children}</div>
				<div className="flex justify-end">
					<div className="mr-3">
						<SystemButtons.Regular>Discard</SystemButtons.Regular>
					</div>
					<div>
						<SystemButtons.Regular
							bgColorClassName="bg-rcBluePrimary"
							textColorClassName="text-white"
						>
							View
						</SystemButtons.Regular>
					</div>
				</div>
			</PaddingContainer>
		</CardContainer>
	);
}
