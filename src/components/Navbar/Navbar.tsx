import React from "react";
import style from "./Navbar.module.css";
import { ImageIndex } from "@src/assets/AssetIndex";
import DropDown from "./components/DropDown/DropDown";
import { ListGroup } from "flowbite-react";
import { motion } from "framer-motion";
import { Card } from "@mui/material";

export interface RINavbar {}

export namespace PINavbar {}

export default function Navbar(props: RINavbar) {
	return (
		<div
			className={
				style.container +
				" h-[64px] xl:h-[80px] border-b border-slate-200 shadow-sm bg-slate-50 px-[32px] md:px-[80px] xl:px-[200px]"
			}
		>
			<div className="flex h-full items-center justify-between">
				<div>
					<img src={ImageIndex.RcLogo} />
				</div>

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
										<ListGroup.Item>Profile</ListGroup.Item>
										<ListGroup.Item>Settings</ListGroup.Item>
										<ListGroup.Item>Messages</ListGroup.Item>
										<ListGroup.Item>Download</ListGroup.Item>
									</ListGroup>
								</motion.div>
							}
						/>
					</div>
				</div>

				<div className="flex">
					<div className="mr-3">
						<button
							style={{ padding: "8px 24px", borderRadius: 6, fontSize: 14 }}
							className="bg-rcBlue text-white font-medium active:scale-95 active:brightness-100 hover:brightness-105 transition-all"
						>
							Sign up
						</button>
					</div>
					<div>
						<button
							style={{ padding: "8px 24px", borderRadius: 6, fontSize: 14 }}
							className=" text-slate-800 border border-slate-300 font-medium active:scale-95 active:brightness-100 hover:brightness-105 transition-all"
						>
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
