import SystemButtons from "@src/components/Buttons/System/SystemButtons";
import Layout from "@src/components/Layout/Layout";
import Comment from "@src/components/ArticleComment/Comment/Comment";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import PageActions from "./actions/PageActions";
import { useAuthGuardContext } from "@src/AuthGuard/AuthGuard";
import { useParams } from "react-router-dom";
import UnAuthPage from "@src/AuthGuard/components/UnAuthPage/UnAuthPage";
import AuthorAvatar from "@src/components/Avatars/AuthorAvatar/AuthorAvatar";
import remarkGfm from "remark-gfm";

function ViewArticles() {
	const [state, setState] = useState<ViewArticles.State>({
		article: null,
		comment: {
			query: "",
		},
		loading: {},
	});

	const actions = new PageActions(state, setState);
	const { userDetails } = useAuthGuardContext();
	const { id } = useParams();

	useEffect(() => {
		if (id && userDetails) {
			actions.fetchArticle(userDetails.id, id);
		}
	}, []);

	if (!userDetails) {
		return <UnAuthPage />;
	}

	if (!id) {
		return (
			<Layout>
				<ResponsiveContainer>
					<Typography.H2>Article Id not found</Typography.H2>
				</ResponsiveContainer>
			</Layout>
		);
	}

	return (
		<Layout>
			<ResponsiveContainer style={{ paddingBottom: 100 }}>
				{state.article ? (
					<div className="xl:w-4/6 w-full">
						<Typography.H1 className="font-semibold mb-sys-9">
							{state.article.heading}
						</Typography.H1>
						<Typography.H3 className="text-zinc-500 mb-sys-39">
							{state.article.subheading}
						</Typography.H3>
						<div className="mb-sys-63">
							<AuthorAvatar />
						</div>
						<div className="markdown-area mb-sys-63">
							<ReactMarkdown remarkPlugins={[remarkGfm]}>
								{state.article.body}
							</ReactMarkdown>
						</div>

						<div className="flex flex-wrap gap-x-3 items-start mb-sys-39">
							<textarea
								placeholder="enter your comment"
								className="border-1 rounded border-neutral-300 p-3 focus:border-transparent grow"
								value={state.comment.query}
								onChange={(e) => {
									actions.setQuery(e.target.value);
								}}
							/>
							<SystemButtons.Regular
								onClick={() => {
									actions.createComment({
										userId: userDetails.id,
										articleId: id,
										text: state.comment.query,
									});
									actions.mutateState((v) => {
										v.comment.query = "";
									});
								}}
							>
								Submit
							</SystemButtons.Regular>
						</div>

						<div className="flex flex-col gap-y-10">
							{state.article.comments.map((v) => (
								<Comment data={v} key={v.commentId} />
							))}
						</div>
					</div>
				) : (
					<></>
				)}
			</ResponsiveContainer>
		</Layout>
	);
}

export default ViewArticles;
