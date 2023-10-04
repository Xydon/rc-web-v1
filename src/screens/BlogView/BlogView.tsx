import SystemButtons from "@src/components/Buttons/System/SystemButtons";
import Navbar from "@src/components/Navbar/Navbar";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import { FieldDataService, Validators } from "@src/modules/FieldData/FieldData";
import useHeight from "@src/modules/hooks/useHeight";
import { Label, TextInput, Textarea } from "flowbite-react";
import React, { useState } from "react";
import FieldDataClass from "@src/modules/FieldData/FieldDataClass";
// import CreatePostActions from "./actions/CreatePostActions";
import getFieldColor from "@src/modules/Utils/getFieldColor";

export interface RICreatePost {
    postID:Number,
}

export namespace PICreatePost {}

export default function CreatePost(props: RICreatePost) {
	const heightHandle = useHeight();
	const [state, setState] = useState<CreatePostScreen.State>({
		postHeading: new FieldDataClass("", Validators.validateNull),
		postBody: new FieldDataClass(
			"",
			FieldDataService.clubValidators(Validators.validateNull)
		),
	});

	// const createPostActions = new CreatePostActions(state, setState);

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

					</div>
				</ResponsiveContainer>
			</div>
		</div>
	);
}




