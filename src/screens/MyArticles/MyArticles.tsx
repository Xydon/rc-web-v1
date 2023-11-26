import {
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import ArticleCards from "@src/components/ArticleCards/ArticleCards";
import SystemButtons from "@src/components/Buttons/System/SystemButtons";
import Navbar from "@src/components/Navbar/Navbar";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import useHeight from "@src/modules/hooks/useHeight";
import { Label, Radio, TextInput } from "flowbite-react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import React, { useEffect, useState } from "react";
import PageActions from "./actions/PageActions";
import { useAuthGuardContext } from "@src/AuthGuard/AuthGuard";
import UnAuthPage from "@src/AuthGuard/components/UnAuthPage/UnAuthPage";

export interface RIMyArticles {}

export namespace PIMyArticles {}

export default function MyArticles(props: RIMyArticles) {
	const [state, setState] = useState<MyArticles.State>({
		articles: [],
		query: "",
		loading: {},
	});

	const actions = new PageActions(state, setState);
	const heightHandle = useHeight();
	const { userDetails } = useAuthGuardContext();

	useEffect(() => {
		if (userDetails) actions.fetchArticles(userDetails.id);
	}, []);

	if (!userDetails) {
		return <UnAuthPage />;
	}

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
						<Typography.H2>My Articles</Typography.H2>
					</div>
					<div className="flex items-center w-full mb-sys-39">
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
					{/* <fieldset
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
					</fieldset> */}

					<div className="mb-sys-24">
						<Typography.BodyEmphasis>20 Articles</Typography.BodyEmphasis>
					</div>

					<ArticleCards.ScreenContainerLayout>
						{actions.getArticles().map((v) => (
							<ArticleCards.Box key={v.articleId}>
								<ArticleCards.ReviewList
									data={{
										heading: v.articleHeading,
										byLine: v.articleSubHeading,
										category: undefined,
										onDiscard: () => {
											actions.deleteArticle(v.articleId);
										},
									}}
								>
									<div className="mb-sys-9">
										<ArticleCards.Alerts
											heading="Article Accepted"
											variant="success"
										>
											<Typography.Body>
												accepted on - {v.articleAcceptedDate}
											</Typography.Body>
										</ArticleCards.Alerts>
									</div>
									<div>
										<List>
											<ListItem>
												<ListItemText>
													{v.articleStats.views} views
												</ListItemText>
												<ListItemIcon>
													<VisibilityIcon />
												</ListItemIcon>
											</ListItem>
											<ListItem>
												<ListItemText>
													{v.articleStats.likes} likes
												</ListItemText>
												<ListItemIcon>
													<ThumbUpIcon />
												</ListItemIcon>
											</ListItem>
											<ListItem>
												<ListItemText>
													{v.articleStats.comments} comments
												</ListItemText>
												<ListItemIcon>
													<ChatBubbleIcon />
												</ListItemIcon>
											</ListItem>
										</List>
									</div>
								</ArticleCards.ReviewList>
							</ArticleCards.Box>
						))}
					</ArticleCards.ScreenContainerLayout>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
