import React, { KeyboardEvent } from "react";

function CommentInput(
	props: React.InputHTMLAttributes<HTMLInputElement> & { onEnter?: () => void }
) {
	const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			props.onEnter && props.onEnter();
		}
	};

	return (
		<div className="rounded-[12px] bg-zinc-50 flex overflow-hidden border border-slate-200 focus:border-amber-500">
			<input
				{...props}
				type="text"
				className="text-sm h-[46px] border-none grow bg-transparent"
				placeholder="Add a Comment..."
				onKeyPress={handleKeyPress}
			/>
		</div>
	);
}

export default CommentInput;
