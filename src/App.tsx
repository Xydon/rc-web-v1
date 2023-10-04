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
import AllArticles from "./screens/AllArticles/AllArticles";
import AllPostScreen from "./screens/AllPosts/AllPostScreen";
import MyPosts from "./screens/MyPosts/MyPosts";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/login" element={<Login />} />
			<Route path="/signup" element={<Signup />} />
			<Route
				path="/article/fresh"
				element={<CreateArticlePageGroup.CreateFresh />}
			/>
			<Route path="/article/reviewList" element={<ArticleReviewList />} />
			<Route path="/article/myArticles" element={<MyArticles />} />
			<Route path="/post/create" element={<CreatePost />} />
			<Route path="/post/reviewList" element={<PostReviewList />} />
			<Route path='/article/allArticles' element={<AllArticles/ >} />
			<Route path='/post/allPosts' element={<AllPostScreen/>} />
			<Route path='/post/myPosts' element={<MyPosts/>} />
			<Route path="*" element={<div>404</div>} />
		</Routes>
	);
}

export default App;
