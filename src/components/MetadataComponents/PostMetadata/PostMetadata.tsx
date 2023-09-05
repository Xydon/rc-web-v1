import AssetIndex from "@src/assets/AssetIndex"
// import { Avatar } from "flowbite-react";
import React from "react";

export interface RIRegular {
	textColorClassName?: string;
	bgColorClassName?: string;
	borderColorClassName?: string;
	children?: React.ReactNode;
	interactionType?: "shrink" | "border";
	onClick?: () => void;
}

export namespace PIRegular {}

export default function PostMetadata(props: RIRegular) {
	const {
		textColorClassName = "text-slate-800",
		bgColorClassName = "",
		onClick,
		borderColorClassName = "border-slate-300",
		children,
		interactionType = "border",
	} = props;

	return (
		<div className="flex justify-between">
			<div className="flex flex-row my-auto">
				<div className="rounded-full">
					<AssetIndex.Avatar />
				</div>
				<div className="flex">
					<div className="mx-2 flex-row">
						<div className="font-medium text-xs">
							Chirag Goel
						</div>
						<div className="text-2xs font-thin opacity-50">
							14 Nov 2025
						</div>
					</div>
				</div>
			</div>
			<div className="font-medium text-sm">
				<div>
					14 likes
				</div>
				<div >
					3 comments
				</div>
			</div>
		</div>
	);
}
