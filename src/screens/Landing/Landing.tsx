import React from "react";
import style from "./Landing.module.css";
import Navbar from "@src/components/Navbar/Navbar";
import HeroSection from "./sections/HeroSection/HeroSection";
import OurInitiatives from "./sections/OurInitiatives/OurInitiatives";
import useHeight from "@src/modules/hooks/useHeight";
import CommunityArticles from "./sections/CommunityArticles/CommunityArticles";
import TopPosts from "./sections/TopPosts/TopPosts";

export interface RILanding {}

export namespace PILanding {}

export default function Landing(props: RILanding) {
	const heightHandle = useHeight();

	return (
		<div>
			<div ref={heightHandle.ref}>
				<Navbar />
			</div>
			<div
				style={{
					height: `calc(100vh - ${heightHandle.height}px)`,
					overflowY: "auto",
					overflowX: "hidden",
					paddingBottom: 100
				}}
			>
				<HeroSection />
				<OurInitiatives />
				<div className="h-20" />
				<CommunityArticles />
				<div style={{ height: 200 }} />
				<TopPosts />
			</div>
		</div>
	);
}
