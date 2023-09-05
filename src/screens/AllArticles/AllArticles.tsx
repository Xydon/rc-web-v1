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

export default function AllArticles(props: RIArticleReviewList) {
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
						<Typography.H2>Community Articles</Typography.H2>
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
					<ArticleCards.ScreenContainerLayout>
						<ArticleCards.Box>
							<ArticleCards.SimpleArticleCard
								data={{
									heading: "Heading",
									byLine: "This is a by line",
									category: "research topics",
								}}
							>

							</ArticleCards.SimpleArticleCard>
						</ArticleCards.Box>
					</ArticleCards.ScreenContainerLayout>
				</ResponsiveContainer>
			</div>
		</div>
	);
}




// Faltu sa code just to not get error
