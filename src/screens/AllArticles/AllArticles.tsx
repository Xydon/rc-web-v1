import ArticleCards from "@src/components/ArticleCards/ArticleCards";
import ArticleDisplayCard from "@src/components/ArticleDisplayCard/ArticleDisplayCard";
import SystemButtons from "@src/components/Buttons/System/SystemButtons";
import Navbar from "@src/components/Navbar/Navbar";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import useHeight from "@src/modules/hooks/useHeight";
import getArticlesData from "./fetch/api/getArticlesData";
import { Label, Radio, TextInput } from "flowbite-react";
import React from "react";
// import ArticleDisplayC

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
					{/* <ArticleCards.ScreenContainerLayout>
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
					</ArticleCards.ScreenContainerLayout> */}
					<div className="my-5 grid grid-cols-2">
						{getArticlesData(0).map((article, index) => (
							<div className="my-5 mx-3 ">
								<ArticleDisplayCard
									key={index}
									heading={article.heading}
									byLine={article.byLine}
									category={article.category}
								/>
							</div>
							
						))}
					</div>
				</ResponsiveContainer>
			</div>
		</div>
	);
}




// Faltu sa code just to not get error
