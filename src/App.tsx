import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Landing from "./screens/Landing/Landing";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import CreateArticlePageGroup from "./screens/CreateArticlePageGroup/CreateArticlePageGroup";
import ArticleReviewList from "./screens/ArticleReviewList/ArticleReviewList";
import MyArticles from "./screens/MyArticles/MyArticles";
import CreatePost from "./screens/CreatePost/CreatePost";
import PostReviewList from "./screens/PostReviewList/PostReviewList";
import CommunityPosts from "./screens/CommunityPosts/CommunityPosts";

import AuthGuard from "./AuthGuard/AuthGuard";
import ViewArticles from "./screens/ViewArticles/ViewArticles";
import AllArticles from "./screens/AllArticles/AllArticles";
import ResearchInterns from "./screens/ResearchInterns/ResearchInterns";
import ResearchInternSpecification from "./screens/ResearchInternSpecification/ResearchInternSpecification";
import MyPosts from "./screens/MyPosts/MyPosts";

function App() {
	return (
		<AuthGuard>
			<Routes>
				{/* <Route path="/" element={<Landing />} /> */}
				<Route path="/" element={<ResearchInternSpecification />} />
				<Route path="/researchInterns" element={<ResearchInterns />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route
					path="/article/fresh"
					element={<CreateArticlePageGroup.CreateFresh />}
				/>
				<Route path="/" element={<ViewArticles />} />
				<Route path="/article/view/:id" element={<ViewArticles />} />
				<Route path="/article/reviewList" element={<ArticleReviewList />} />
				<Route path="/article/myArticles" element={<MyArticles />} />

				<Route path="/article/all" element={<AllArticles />} />

				<Route path="/post/create" element={<CreatePost />} />
				<Route path="/post/reviewList" element={<PostReviewList />} />
				<Route path="/post/community" element={<CommunityPosts />} />
				<Route path="/post/myPosts" element={<MyPosts />} />
			</Routes>
		</AuthGuard>
	);
}

export default App;