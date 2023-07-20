import SystemButtons from "@src/components/Buttons/System/SystemButtons";
import Navbar from "@src/components/Navbar/Navbar";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import useHeight from "@src/modules/hooks/useHeight";
import React from "react";

export interface RICreateFresh {}

export namespace PICreateFresh {}

export default function CreateFresh(props: RICreateFresh) {
	const heightHandle = useHeight();
	return (
		<div>
			<div ref={heightHandle.ref}>
				<Navbar />
			</div>
			<div
				style={{
					minHeight: `calc( 100vh - ${heightHandle.height}px )`,
					overflow: "auto",
					paddingTop: 63,
				}}
			>
				<ResponsiveContainer>
					<div className="flex justify-between">
						<div>
							<Typography.H2>Create Your Article</Typography.H2>
						</div>

						<div className="flex">
							<div className="mr-2">
								<SystemButtons.Regular
									textColorClassName="text-white"
									bgColorClassName="bg-black"
									borderColorClassName=""
								>
									Submit for review
								</SystemButtons.Regular>
							</div>
							<div className="mr-2">
								<SystemButtons.Regular>Discard</SystemButtons.Regular>
							</div>
						</div>
					</div>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
