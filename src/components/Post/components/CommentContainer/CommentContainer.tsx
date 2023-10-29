import React, { FC } from "react";
import style from "./CommentContainer.module.css";

const CommentContainer: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div
			style={{ marginTop: 44, maxHeight: 500, overflow: "auto" }}
			className={style.container}
		>
			{children}
		</div>
	);
};

export default CommentContainer;
