import React from "react";
import Navbar from "../Navbar/Navbar";
import useHeight from "@src/modules/hooks/useHeight";
import RcFooter from "../RcFooter/RcFooter";

interface Props {
	children?: React.ReactNode;
}

function Layout(props: Props) {
	const heightHandle = useHeight();
	const { children } = props;

	return (
		<div>
			<div ref={heightHandle.ref}>
				<Navbar />
			</div>
			<div
				style={{
					height: `calc( 100vh - ${heightHandle.height}px )`,
					overflow: "auto",
					paddingTop: 63,
				}}
			>
				<div className="min-h-full">{children}</div>
				<div>
					<RcFooter />
				</div>
			</div>
		</div>
	);
}

export default Layout;
