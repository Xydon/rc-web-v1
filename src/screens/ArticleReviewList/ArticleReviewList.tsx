import ArticleCards from "@src/components/ArticleCards/ArticleCards";
import SystemButtons from "@src/components/Buttons/System/SystemButtons";
import Navbar from "@src/components/Navbar/Navbar";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import useHeight from "@src/modules/hooks/useHeight";
import { Label, Radio, TextInput } from "flowbite-react";
import React from "react";

export interface RIArticleReviewList {}

export namespace PIArticleReviewList {}

export default function ArticleReviewList(props: RIArticleReviewList) {
	const heightHandle = useHeight();
	return (
		<div>
			<div ref={heightHandle.ref}>
				<Navbar />
			</div>
			<div
				style={{
					maxHeight: `calc( 100vh - ${heightHandle.height}px )`,
					overflow: "auto",
				}}
				className="py-sys-63"
			>
				<ResponsiveContainer>
					<div className="mb-sys-24">
						<Typography.H2>Article Review List</Typography.H2>
					</div>
					<div className="flex items-center w-full mb-sys-15">
						<div className="mr-sys-9 basis-1/2">
							<TextInput
								style={{ width: "100%" }}
								placeholder="Search article"
							/>
						</div>
						<div>
							<SystemButtons.Regular>Apply</SystemButtons.Regular>
						</div>
					</div>
					<fieldset
						className="flex max-w-md flex-row gap-4 mb-sys-39"
						id="radio"
					>
						<Typography.Body>Select type</Typography.Body>
						<div className="flex items-center gap-2 min-w-max">
							<Radio defaultChecked id="All" name="countries" value="All" />
							<Label htmlFor="united-state">All</Label>
						</div>
						<div className="flex items-center gap-2 min-w-max">
							<Radio id="Pending" name="countries" value="Pending" />
							<Label htmlFor="germany">Pending</Label>
						</div>
						<div className="flex items-center gap-2 min-w-max">
							<Radio id="Rejected" name="countries" value="Rejected" />
							<Label htmlFor="spain">Rejected</Label>
						</div>
					</fieldset>

					<div className="mb-sys-24">
						<Typography.BodyEmphasis>20 Articles</Typography.BodyEmphasis>
					</div>

					<ArticleCards.ScreenContainerLayout>
						<ArticleCards.Box>
							<ArticleCards.ReviewList
								data={{
									heading: "Heading",
									byLine: "This is a by line",
									category: "research topics",
								}}
							>
								<ArticleCards.Alerts heading="Review Pending" variant="warning">
									<Typography.Body>submitted on - 14 July 2023</Typography.Body>
								</ArticleCards.Alerts>
							</ArticleCards.ReviewList>
						</ArticleCards.Box>

						<ArticleCards.Box>
							<ArticleCards.ReviewList
								data={{
									heading: "Heading",
									byLine: "This is a by line",
								}}
							>
								<ArticleCards.Alerts heading="Article Rejected" variant="error">
									<Typography.Body>rejected on - 14 July 2023</Typography.Body>
								</ArticleCards.Alerts>
							</ArticleCards.ReviewList>
						</ArticleCards.Box>
					</ArticleCards.ScreenContainerLayout>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
