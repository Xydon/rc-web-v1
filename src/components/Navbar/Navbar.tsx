import React, { useEffect, useState } from "react";
import style from "./Navbar.module.css";
import { ImageIndex } from "@src/assets/AssetIndex";
import DropDown from "./components/DropDown/DropDown";
import { ListGroup } from "flowbite-react";
import { motion } from "framer-motion";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";

export interface RINavbar {}

export namespace PINavbar {}

export default function Navbar(props: RINavbar) {
	// const [hasScrolled, setHasScrolled] = useState(false);

	// useEffect(() => {
	// 	const handler = (e: Event) => {
	// 		if (window.scrollY > 0) setHasScrolled(true);
	// 		else setHasScrolled(false);
	// 	};
	// 	window.addEventListener("scroll", handler);
	// 	return () => window.removeEventListener("scroll", handler);
	// }, []);

	return (
		<>
			<div
				className={
					style.container +
					" w-full h-[64px] xl:h-[80px] border-b border-slate-200 shadow-sm bg-slate-50 px-[32px] md:px-[80px] xl:px-[200px]"
				}
				style={{
					top: 0,
					left: 0,
					zIndex: 200,
				}}
			>
				<div className="flex h-full items-center justify-between">
					<Link to="/">
						<div>
							<img src={ImageIndex.RcLogo} />
						</div>
					</Link>

					<div className="hidden xl:flex justify-between px-3">
						<div className="cursor-pointer px-3 rounded-sm">
							<DropDown
								text={"articles"}
								DropDownNode={
									<motion.div
										style={{ width: 160 }}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
									>
										<ListGroup>
											<ListGroup.Item>
												<Link to={"/article/all"}>All Articles</Link>
											</ListGroup.Item>
											<ListGroup.Item>
												<Link to={"/article/myArticles"}>My Articles</Link>
											</ListGroup.Item>
											<ListGroup.Item>
												<Link to={"/article/fresh"}>Create Article</Link>
											</ListGroup.Item>
											<ListGroup.Item>
												<Link to={"/article/reviewList"}>
													Verification List
												</Link>
											</ListGroup.Item>
										</ListGroup>
									</motion.div>
								}
							/>
						</div>
						<div className="cursor-pointer px-3">
							<DropDown
								text={"about us"}
								DropDownNode={
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
									>
										<Card
											variant="outlined"
											sx={{
												borderRadius: 2,
												padding: 1,
												display: "flex",
												width: "max-content",
											}}
										>
											<p className="text-sm text-indigo-500 font-medium">
												Get To Know Our Story
											</p>
										</Card>
									</motion.div>
								}
							/>
						</div>
						<div className="cursor-pointer px-3">
							<DropDown
								text={"research interns"}
								DropDownNode={
									<motion.div
										style={{ width: 160 }}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
									>
										<ListGroup>
											<ListGroup.Item>Profile</ListGroup.Item>
											<ListGroup.Item>Settings</ListGroup.Item>
											<ListGroup.Item>Messages</ListGroup.Item>
											<ListGroup.Item>Download</ListGroup.Item>
										</ListGroup>
									</motion.div>
								}
							/>
						</div>
						<div className="cursor-pointer px-3">
							<DropDown
								text={"community"}
								DropDownNode={
									<motion.div
										style={{ width: 160 }}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
									>
										<ListGroup>
											<ListGroup.Item>
												<Link to={"/post/community"}>All Posts</Link>
											</ListGroup.Item>
											<ListGroup.Item>
												<Link to={"/post/myPosts"}>My Posts</Link>
											</ListGroup.Item>
											<ListGroup.Item>
												<Link to={"/post/create"}>Create Post</Link>
											</ListGroup.Item>
											<ListGroup.Item>
												<Link to={"/post/reviewList"}>Review List</Link>
											</ListGroup.Item>
										</ListGroup>
									</motion.div>
								}
							/>
						</div>
					</div>

					<div className="flex">
						<div className="mr-3">
							<Link to={"/signup"}>
								<button
									style={{ padding: "8px 24px", borderRadius: 6, fontSize: 14 }}
									className="bg-rcBlue text-white font-medium active:scale-95 active:brightness-100 hover:brightness-105 transition-all"
								>
									Sign up
								</button>
							</Link>
						</div>
						<div>
							<Link to={"/login"}>
								<button
									style={{ padding: "8px 24px", borderRadius: 6, fontSize: 14 }}
									className=" text-slate-800 border border-slate-300 font-medium active:scale-95 active:brightness-100 hover:brightness-105 transition-all"
								>
									Login
								</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
