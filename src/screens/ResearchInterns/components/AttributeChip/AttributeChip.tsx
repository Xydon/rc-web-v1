import Typography from "@src/components/Typography";
import React from "react";

interface Props {
	text: string;
	count: number;
}

function AttributeChip(props: Props) {
	const { text, count } = props;
	return (
		<div className="p-2 rounded-full flex gap-x-2 items-center bg-zinc-50 border border-zinc-200 cursor-pointer hover:shadow-md hover:translate-y-[-2px] shadow-indigo-500 transition-all">
			<Typography.BodySmall>{text}</Typography.BodySmall>
			<div className="rounded-full bg-indigo-500 text-white w-6 h-6 flex justify-center items-center">
				<p className="text-xs font-semibold">{count}</p>
			</div>
		</div>
	);
}

export default AttributeChip;
