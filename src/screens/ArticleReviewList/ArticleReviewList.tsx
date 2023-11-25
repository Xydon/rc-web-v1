import ArticleCards from "@src/components/ArticleCards/ArticleCards";
import SystemButtons from "@src/components/Buttons/System/SystemButtons";
import Navbar from "@src/components/Navbar/Navbar";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import useHeight from "@src/modules/hooks/useHeight";
import { Label, Radio, TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import PageActions from "./actions/PageActions";
import { useAuthGuardContext } from "@src/AuthGuard/AuthGuard";
import AsyncProcessBoundary from "@src/components/feedback/AsyncProcessBoundary/AsyncProcessBoundary";
import ErrorBoundary from "@src/components/feedback/ErrorBoundary/ErrorBoundary";
import AsyncStateFactory from "@src/modules/StateManagement/AsyncState/AsyncStateFactory";

export interface RIArticleReviewList {}

export namespace PIArticleReviewList {}

export default function ArticleReviewList(props: RIArticleReviewList) {
	const [state, setState] = useState<ArticleReviewList.State>({
		articles: [],
		loading: {
			deleteArticle: AsyncStateFactory(),
			fetchArticles: AsyncStateFactory(),
		},
		query: "",
		filter: "all",
	});

	const actions = new PageActions(state, setState);
	const heightHandle = useHeight();
	const userDetails = useAuthGuardContext().userDetails as UserDetails;

	useEffect(() => {
		actions.fetchArticles(userDetails.id);
	}, []);

	return (
		<ErrorBoundary
			asyncStates={[state.loading.fetchArticles]}
			primaryAction={{
				onClick: undefined,
				label: undefined,
			}}
		>
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
									onChange={(e) => {
										actions.setQuery(e.target.value);
									}}
								/>
							</div>
							<div>
								<SystemButtons.Regular>Apply</SystemButtons.Regular>
							</div>
						</div>
						<fieldset
							className="flex max-w-md flex-row gap-4 mb-sys-39"
							id="radio"
							onChange={(e) => {
								console.log(e.target);
							}}
						>
							<Typography.Body>Select type</Typography.Body>
							<div className="flex items-center gap-2 min-w-max">
								<Radio
									defaultChecked
									id="All"
									name="countries"
									value="All"
									onChange={() => {
										actions.setFilter("all");
									}}
								/>
								<Label htmlFor="united-state">All</Label>
							</div>
							<div className="flex items-center gap-2 min-w-max">
								<Radio
									id="Pending"
									name="countries"
									value="Pending"
									onChange={() => {
										actions.setFilter("pending");
									}}
								/>
								<Label htmlFor="germany">Pending</Label>
							</div>
							<div className="flex items-center gap-2 min-w-max">
								<Radio
									id="Rejected"
									name="countries"
									value="Rejected"
									onChange={() => {
										actions.setFilter("rejected");
									}}
								/>
								<Label htmlFor="spain">Rejected</Label>
							</div>
						</fieldset>

						<div className="mb-sys-24">
							<Typography.BodyEmphasis>20 Articles</Typography.BodyEmphasis>
						</div>

						<ArticleCards.ScreenContainerLayout>
							{actions.articleList().map((v) => {
								return (
									<ErrorBoundary
										asyncStates={[state.loading.deleteArticle]}
										primaryAction={{
											onClick: undefined,
											label: undefined,
										}}
									>
										<ArticleCards.Box>
											<ArticleCards.ReviewList
												data={{
													heading: v.heading,
													byLine: v.subheading,
													category: v.category?.name,
													onView: () => {},
													onDiscard: () => {
														actions.deleteArticle(v.articleId);
													},
												}}
											>
												<ArticleCards.Alerts
													heading={(() => {
														if (v.reviewStatus === "accepted")
															return "Article accepted";
														else if (v.reviewStatus === "rejected")
															return "Article rejected";
														return "Article Submitted";
													})()}
													variant={(() => {
														if (v.reviewStatus === "accepted") return "success";
														else if (v.reviewStatus === "rejected")
															return "error";
														return "warning";
													})()}
												>
													<Typography.Body>{v.message}</Typography.Body>
												</ArticleCards.Alerts>
											</ArticleCards.ReviewList>
										</ArticleCards.Box>
									</ErrorBoundary>
								);
							})}
						</ArticleCards.ScreenContainerLayout>
					</ResponsiveContainer>
				</div>
			</div>
		</ErrorBoundary>
	);
}
