import SystemButtons from "@src/components/Buttons/System/SystemButtons";
import Navbar from "@src/components/Navbar/Navbar";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import useHeight from "@src/modules/hooks/useHeight";
import { Label, TextInput, Textarea } from "flowbite-react";
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
					<div className="flex justify-between mb-sys-39">
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
					<div className="w-1/2">
						<div>
							<div className="mb-sys-24">
								<div className="mb-2 block">
									<Label htmlFor="art-head" value="Article Heading" />
								</div>
								<TextInput
									id="art-head"
									placeholder="The Cat is both dead and alive!"
									required
									type="text"
								/>
							</div>
							<div className="mb-sys-24">
								<div className="mb-2 block">
									<Label htmlFor="art-by-line" value="Enter Article ByLine" />
								</div>
								<TextInput
									id="art-by-line"
									placeholder="Learn how Schrodinger Equation explains the same."
									required
									type="text"
								/>
							</div>
							<div className="mb-sys-24">
								<div className="mb-2 block">
									<Label htmlFor="art-body" value="Enter Article Body" />
								</div>
								<Textarea
									id="art-body"
									placeholder="An awesome journey begins here...."
									required
									rows={8}
								/>
							</div>
							<div className="mb-sys-24">
								<div className="mb-2 block">
									<Label htmlFor="art-submit-note" value="Notes for reviewer" />
								</div>
								<Textarea
									id="art-submit-note"
									placeholder="Enter Note"
									rows={4}
								/>
							</div>
						</div>
					</div>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
