import React from "react";

function ImageContainer(props: React.ImgHTMLAttributes<HTMLImageElement>) {
	return (
		<img
			{...props}
			style={{
				width: "100%",
				...props.style,
			}}
			className={
				"aspect-square outline-none border-none object-cover " + props.className
			}
		/>
	);
}

export default ImageContainer;
