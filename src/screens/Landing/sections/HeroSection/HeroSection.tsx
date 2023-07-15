import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import { Tooltip } from "flowbite-react";
import { motion } from "framer-motion";
import React from "react";
import style from "./HeroSection.module.css";
import RotateAndScale from "@src/components/Interaction/RotateAndScale/RotateAndScale";

export interface RIHeroSection {}

export namespace PIHeroSection {}

export default function HeroSection(props: RIHeroSection) {
	return (
		<div className={style.container}>
			<ResponsiveContainer>
				<div style={{ paddingTop: 111 }}>
					<div className="w-7/12">
						<p
							style={{ fontSize: 48, marginBottom: 14 }}
							className="font-semibold text-slate-700"
						>
							Research Community
						</p>
						<p
							style={{
								fontSize: 18,
								lineHeight: "28px",
								letterSpacing: "0.5%",
								marginBottom: 39,
							}}
							className="text-slate-500"
						>
							IIT BHU research community is a hub of geeks where we striver
							together to build a better environment for research folks, hop on
							to our dashboard for resources, latest interns and many other
							joys.
						</p>

						<Tooltip
							content="Nothing is going to hold me back!"
							placement="right"
						>
							<motion.button
								className="px-[72px] py-[17px] bg-rcBluePrimary text-white font-medium"
								whileHover={{
									boxShadow: "0 0 0 0 rgba(0,0,0,0)",
									filter: "brightness(95%)",
								}}
								whileTap={{ scale: 0.98 }}
								style={{
									borderRadius: 10,
									fontSize: 16,
									boxShadow:
										"0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.10)",
								}}
							>
								Get Started
							</motion.button>
						</Tooltip>
					</div>
				</div>
			</ResponsiveContainer>
		</div>
	);
}
