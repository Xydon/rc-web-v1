import SystemButtons from "@src/components/Buttons/System/SystemButtons";
import Layout from "@src/components/Layout/Layout";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import { Label, TextInput, Textarea } from "flowbite-react";
import React, { useState } from "react";
import FieldDataClass from "@src/modules/FieldData/FieldDataClass";
import getFieldColor from "@src/modules/Utils/getFieldColor";
import DeleteIcon from "@mui/icons-material/Delete";
import { ButtonBase } from "@mui/material";

function CreateInternList() {
	const [state, setState] = useState<CreateInternList.State>({
		name: new FieldDataClass(""),
		institution: new FieldDataClass(""),
		attributes: new FieldDataClass(""),
		description: new FieldDataClass(""),
		attachments: [
			{ name: new FieldDataClass(""), value: new FieldDataClass("") },
		],
		loading: {},
	});

	return (
		<Layout>
			<ResponsiveContainer style={{paddingBottom: 200}}>
				<div className="flex justify-between mb-sys-39">
					<Typography.H2 className="font-medium">Create Interns</Typography.H2>
					<SystemButtons.Regular bgColorClassName="bg-black text-white">
						Create
					</SystemButtons.Regular>
				</div>
				<div className="w-2/4">
					<div className="mb-sys-24">
						<div className="mb-2 block">
							<Label htmlFor="post-head" value="Enter Name" />
						</div>
						<TextInput
							helperText={<>{state.name.getError()}</>}
							id="post-head"
							color={getFieldColor(state.name, undefined, true)}
							value={state.name.getValue()}
							// onChange={(e) => {
							// 	createPostActions.setHeading(e.target.value);
							// }}
							// onBlur={() => {
							// 	createPostActions.validateHeading();
							// }}
							placeholder="My Awesome Post"
							required
							type="text"
						/>
					</div>
					<div className="mb-sys-24">
						<div className="mb-2 block">
							<Label htmlFor="post-head" value="Enter Institution" />
						</div>
						<TextInput
							helperText={<>{state.institution.getError()}</>}
							id="post-head"
							color={getFieldColor(state.institution, undefined, true)}
							value={state.institution.getValue()}
							// onChange={(e) => {
							// 	createPostActions.setHeading(e.target.value);
							// }}
							// onBlur={() => {
							// 	createPostActions.validateHeading();
							// }}
							placeholder="My Awesome Post"
							required
							type="text"
						/>
					</div>
					<div className="mb-sys-24">
						<div className="mb-2 block">
							<Label
								htmlFor="post-head"
								value="Enter comma separated Attributes"
							/>
						</div>
						<TextInput
							helperText={<>{state.attributes.getError()}</>}
							id="post-head"
							color={getFieldColor(state.attributes, undefined, true)}
							value={state.attributes.getValue()}
							// onChange={(e) => {
							// 	createPostActions.setHeading(e.target.value);
							// }}
							// onBlur={() => {
							// 	createPostActions.validateHeading();
							// }}
							placeholder="My Awesome Post"
							required
							type="text"
						/>
					</div>
					<div className="mb-sys-24">
						<div className="mb-2 block">
							<Label htmlFor="post-body" value="Enter Description" />
						</div>
						<Textarea
							helperText={<>{state.description.getError()}</>}
							color={getFieldColor(state.description, undefined, true)}
							id="post-body"
							placeholder="An awesome journey begins here...."
							// onBlur={() => {
							// 	createPostActions.validateBody();
							// }}
							value={state.description.getValue()}
							// onChange={(e) => {
							// 	if (state.postBody.hasError()) {
							// 		createPostActions.validateBody();
							// 	}
							// 	createPostActions.setBody(e.target.value);
							// }}
							required
							rows={8}
						/>
					</div>
					<div className="mb-sys-24">
						<div className="mb-2 block">
							<Label htmlFor="post-head" value="Attachments" />
						</div>
						<div className="mb-sys-15">
							{state.attachments.map((v) => (
								<div className="flex gap-x-3 items-center">
									<div className="basis-1/3">
										<TextInput
											// helperText={<>{state.placeholder.getError()}</>}
											id="post-head"
											// color={getFieldColor(state.placeholder, undefined, true)}
											// value={state.placeholder.getValue()}
											// onChange={(e) => {
											// 	createPostActions.setHeading(e.target.value);
											// }}
											// onBlur={() => {
											// 	createPostActions.validateHeading();
											// }}
											placeholder="My Awesome Post"
											required
											type="text"
										/>
									</div>
									<div className="basis-2/3">
										<TextInput
											// helperText={<>{state.placeholder.getError()}</>}
											id="post-head"
											// color={getFieldColor(state.placeholder, undefined, true)}
											// value={state.placeholder.getValue()}
											// onChange={(e) => {
											// 	createPostActions.setHeading(e.target.value);
											// }}
											// onBlur={() => {
											// 	createPostActions.validateHeading();
											// }}
											placeholder="My Awesome Post"
											required
											type="text"
										/>
									</div>
									<ButtonBase sx={{ padding: 1.618, borderRadius: 20 }}>
										<DeleteIcon />
									</ButtonBase>
								</div>
							))}
						</div>
						<SystemButtons.Regular>Add more</SystemButtons.Regular>
					</div>
				</div>
			</ResponsiveContainer>
		</Layout>
	);
}

export default CreateInternList;
