import Typography from "@src/components/Typography";
import React from "react";

export interface RIReviewPostCard {}

export namespace PIReviewPostCard {}

export default function ReviewPostCard(props: RIReviewPostCard) {
	return (
		<div style={{ borderRadius: 3 }} className="border p-5">
			<Typography.BodyEmphasis className="font-semibold text-slate-800">
				Heading
			</Typography.BodyEmphasis>
			<Typography.Body>
				sadfasdf asdf sadf asd fsadf asdf asd fsadfa sdfasd fasdf sadf s
			</Typography.Body>
		</div>
	);
}
