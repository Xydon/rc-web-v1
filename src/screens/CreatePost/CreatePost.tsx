import SystemButtons from "@src/components/Buttons/System/SystemButtons";
import Navbar from "@src/components/Navbar/Navbar";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import useHeight from "@src/modules/hooks/useHeight";
import { Label, TextInput, Textarea } from "flowbite-react";
import React from "react";

export interface RICreatePost {}

export namespace PICreatePost {}

export default function CreatePost(props: RICreatePost) {
	const heightHandle = useHeight();

	return (
		<div>
			<div ref={heightHandle.ref}>
				<Navbar />
			</div>
			<div
				style={{
					maxHeight: `calc( 100vh - ${heightHandle.height}px )`,
					overflow: "auto",
					paddingTop: 63,
				}}
			>
				<ResponsiveContainer>
					<div className="flex justify-between mb-sys-39">
						<div>
							<Typography.H2>Create Post</Typography.H2>
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
						<div className="mb-sys-24">
							<div className="mb-2 block">
								<Label htmlFor="post-head" value="Post Heading" />
							</div>
							<TextInput
								id="post-head"
								placeholder="My Awesome Post"
								required
								type="text"
							/>
						</div>
						<div className="mb-sys-24">
							<div className="mb-2 block">
								<Label htmlFor="post-body" value="Enter Post Body" />
							</div>
							<Textarea
								id="post-body"
								placeholder="An awesome journey begins here...."
								required
								rows={8}
							/>
						</div>
					</div>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
