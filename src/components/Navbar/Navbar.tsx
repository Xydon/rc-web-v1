import React from "react";
import style from "./Navbar.module.css";
import { ImageIndex } from "@src/assets/AssetIndex";

export interface RINavbar {}

export namespace PINavbar {}

export default function Navbar(props: RINavbar) {
	return (
		<div
			className={style.container + " border-b border-slate-400"}
			style={{ height: 80, padding: "0 200px" }}
		>
			<div className="flex h-full items-center justify-between">
				<div>
					<img src={ImageIndex.RcLogo} />
				</div>

				<div className="flex justify-between" style={{ width: "30%" }}>
					<div className="cursor-pointer hover:font-medium">
						<p className="text-small text-slate-700">knowledge Drive</p>
					</div>
					<div className="cursor-pointer hover:font-medium">
						<p className="text-small text-slate-700">about us</p>
					</div>
					<div className="cursor-pointer hover:font-medium">
						<p className="text-small text-slate-700">research interns</p>
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
