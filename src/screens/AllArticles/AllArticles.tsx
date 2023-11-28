import Divider from "@src/components/ArticleCards/Base/Divider/Divider";
import CommunityArticleCard from "@src/components/CommunityArticleCard/CommunityArticleCard";
import Layout from "@src/components/Layout/Layout";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import { TextInput } from "flowbite-react";
import React, { useEffect, useState } from "react";
import ServerActions from "./actions/ServerActions";

function AllArticles() {
	const [state, setState] = useState<AllArticles.State>({
		articles: [],
		loading: {},
	});

	const actions = new ServerActions(state, setState);

	useEffect(() => {
		actions.fetch();
	}, []);

	return (
		<Layout>
			<ResponsiveContainer>
				<div className="flex justify-between items-center">
					<div>
						<Typography.H2 className="mb-sys-9">All Articles</Typography.H2>
						<Typography.Body className="text-zinc-500 max-w-2xl mb-sys-39">
							Embark on a journey of knowledge and discovery as you explore our
							collection of articles that span a myriad of topics, each crafted
							with care and precision.
						</Typography.Body>
					</div>

					<div className="flex gap-y-1 flex-col">
						<TextInput className="" placeholder="enter search query..." />
						<Typography.Body className="text-zinc-500">
							300 Articles
						</Typography.Body>
					</div>
				</div>
				<div className="mb-sys-39">
					<Divider />
				</div>

				<div className="flex gap-4 flex-wrap" style={{ marginBottom: 56 }}>
					{state.articles.map((v) => (
						<CommunityArticleCard data={v} />
					))}
				</div>
			</ResponsiveContainer>
		</Layout>
	);
}

export default AllArticles;
