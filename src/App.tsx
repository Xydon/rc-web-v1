import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Landing from "./screens/Landing/Landing";
import Login from "./screens/Login/Login";
import Signup from "./screens/Signup/Signup";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
		</Routes>
	);
}

export default App;
