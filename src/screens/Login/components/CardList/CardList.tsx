import AssetIndex from "@src/assets/AssetIndex";
import Typography from "@src/components/Typography";
import React from "react";

export interface RICardList {
	text: string;
}

export namespace PICardList {}

export default function CardList(props: RICardList) {
	return (
		<div
			className="lg:p-[22px] p-4 items-center rounded-md bg-slate-50 flex shadow border \
		 border-slate-100 cursor-pointer hover:shadow-md hover:border-slate-200 transition-all"
		>
			<div className="mr-3">
				<AssetIndex.Check />
			</div>
			<div>
				<Typography.Body>{props.text}</Typography.Body>
			</div>
		</div>
	);
}
