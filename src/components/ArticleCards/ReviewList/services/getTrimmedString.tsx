import { useMemo } from "react";

export default function GetTrimmedString(
	text: string,
	maxLen: number,
	renderComp: (text: string) => JSX.Element,
	showMoreCom: () => JSX.Element
) {
	let buildString = useMemo(() => {
		let split = text.split(" ");
		let last = 0;
		let charCnt = 0;

		for (let i = 0; i < split.length; ++i) {
			const word = split[i];
			charCnt += word.length;

			last = i;

			if (charCnt > maxLen) break;
		}

		return split.filter((v, i) => i <= last).join(" ");
	}, [text]);

	return (
		<div className="flex">
			{renderComp(buildString)}
			{text.length > maxLen && showMoreCom()}
		</div>
	);
}
