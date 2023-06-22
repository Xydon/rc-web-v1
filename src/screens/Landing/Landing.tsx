import React from "react";
import style from "./Landing.module.css";
import Navbar from "@src/components/Navbar/Navbar";

export interface RILanding {}

export namespace PILanding {}

export default function Landing(props: RILanding) {
	return (
		<div className={style.container}>
			<div>
				<Navbar />
			</div>
		</div>
	);
}
