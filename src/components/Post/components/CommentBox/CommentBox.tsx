import PaddingContainer from "@src/components/ArticleCards/Base/PaddingContainer/PaddingContainer";
import React from "react";

interface Props {
	children?: React.ReactNode;
}

function CommentBox(props: Props) {
	const { children } = props;

	return <div className="mb-4">{children}</div>;
}

export default CommentBox;
