import SystemButtons from "@src/components/Buttons/System/SystemButtons";
import Navbar from "@src/components/Navbar/Navbar";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import { FieldDataService, Validators } from "@src/modules/FieldData/FieldData";
import useHeight from "@src/modules/hooks/useHeight";
import { Label, TextInput, Textarea } from "flowbite-react";
import React, { useState } from "react";
import FieldDataClass from "@src/modules/FieldData/FieldDataClass";
import CreatePostActions from "./actions/CreatePostActions";
import getFieldColor from "@src/modules/Utils/getFieldColor";
import ImageUploader from "./components/ImageUploader/ImageUploader";
import ServerActions from "./actions/ServerActions";
import { useAuthGuardContext } from "@src/AuthGuard/AuthGuard";
import UnAuthPage from "@src/AuthGuard/components/UnAuthPage/UnAuthPage";
import AsyncStateFactory from "@src/modules/StateManagement/AsyncState/AsyncStateFactory";
import { useNavigate, useNavigation } from "react-router-dom";

export interface RICreatePost {}

export namespace PICreatePost {}

export default function CreatePost(props: RICreatePost) {
	const heightHandle = useHeight();
	const [state, setState] = useState<CreatePostScreen.State>({
		postHeading: new FieldDataClass("", Validators.validateNull),
		postBody: new FieldDataClass(
			"",
			FieldDataService.clubValidators(Validators.validateNull)
		),
		images: [],
		loading: {
			createPost: AsyncStateFactory(),
		},
	});

	const { userDetails } = useAuthGuardContext();
	const createPostActions = new CreatePostActions(state, setState);
	const serverActions = new ServerActions(state, setState);
	const navigate = useNavigate();

	if (!userDetails) {
		return <UnAuthPage />;
	}

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
									onClick={() => {
										if (createPostActions.validateForm()) {
											// Submit
											serverActions.createPost(userDetails.id, () => {
												navigate(-1);
											});
										}
									}}
									loading={state.loading.createPost.status === "initialized"}
								>
									Submit for review
								</SystemButtons.Regular>
							</div>
							<div className="mr-2">
								<SystemButtons.Regular
									onClick={() => {
										createPostActions.resetForm();
									}}
								>
									Discard
								</SystemButtons.Regular>
							</div>
						</div>
					</div>
					<div className="w-1/2">
						<div className="mb-sys-24">
							<div className="mb-2 block">
								<Label htmlFor="post-head" value="Post Heading" />
							</div>
							<TextInput
								helperText={<>{state.postHeading.getError()}</>}
								color={getFieldColor(state.postHeading, undefined, true)}
								id="post-head"
								value={state.postHeading.getValue()}
								onChange={(e) => {
									createPostActions.setHeading(e.target.value);
								}}
								onBlur={() => {
									createPostActions.validateHeading();
								}}
								placeholder="My Awesome Post"
								required
								type="text"
							/>
						</div>
						<div className="mb-sys-24">
							<div className="mb-2 block">
								<Label value="Upload Images" />
							</div>
							<ImageUploader
								onImagesUpload={function (images: File[]): void {
									createPostActions.mutateState((v) => {
										v.images = images;
									});
								}}
							/>
						</div>
						<div className="mb-sys-24">
							<div className="mb-2 block">
								<Label htmlFor="post-body" value="Enter Post Body" />
							</div>
							<Textarea
								helperText={<>{state.postBody.getError()}</>}
								color={getFieldColor(state.postBody, undefined, true)}
								id="post-body"
								placeholder="An awesome journey begins here...."
								onBlur={() => {
									createPostActions.validateBody();
								}}
								value={state.postBody.getValue()}
								onChange={(e) => {
									if (state.postBody.hasError()) {
										createPostActions.validateBody();
									}
									createPostActions.setBody(e.target.value);
								}}
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
