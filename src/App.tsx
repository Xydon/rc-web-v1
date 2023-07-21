import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Landing from "./screens/Landing/Landing";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";
import CreateArticlePageGroup from "./screens/CreateArticlePageGroup/CreateArticlePageGroup";
import ArticleReviewList from "./screens/ArticleReviewList/ArticleReviewList";

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
			<Route
				path="/article/reviewList"
				element={<ArticleReviewList />}
			/>
		</Routes>
	);
}

export default App;
