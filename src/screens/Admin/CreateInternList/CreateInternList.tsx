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
import { Validators } from "@src/modules/FieldData/FieldData";
import PageFormActions from "./actions/PageFormActions";

function CreateInternList() {
	const [state, setState] = useState<CreateInternList.State>({
		name: new FieldDataClass("", Validators.validateNull),
		institution: new FieldDataClass("", Validators.validateNull),
		attributes: new FieldDataClass("", Validators.validateNull),
		description: new FieldDataClass("", Validators.validateNull),
		attachments: [
			{
				id: "1",
				name: new FieldDataClass("", Validators.validateNull),
				value: new FieldDataClass("", Validators.validateNull),
			},
		],
		loading: {},
	});

	const formActions = new PageFormActions(state, setState);

	return (
		<Layout>
			<ResponsiveContainer style={{ paddingBottom: 200 }}>
				<div className="flex justify-between mb-sys-39">
					<Typography.H2 className="font-medium">Create Interns</Typography.H2>
					<SystemButtons.Regular
						bgColorClassName="bg-black text-white"
						onClick={() => {
							if (formActions.validateAll()) {
								//* submit
							}
						}}
					>
						Create
					</SystemButtons.Regular>
				</div>
				<div className="xl:w-2/4">
					<div className="mb-sys-24">
						<div className="mb-2 block">
							<Label htmlFor="post-head" value="Enter Name" />
						</div>
						<TextInput
							helperText={<>{state.name.getError()}</>}
							id="post-head"
							color={getFieldColor(state.name, undefined, true)}
							value={state.name.getValue()}
							onChange={(e) => {
								formActions.setName(e.target.value);
							}}
							onBlur={() => {
								formActions.validateName();
							}}
							placeholder="My Awesome Post"
							required
							type="text"
						/>
					</div>
					<div className="mb-sys-24">
						<div className="mb-2 block">
							<Label htmlFor="post-head-1" value="Enter Institution" />
						</div>
						<TextInput
							helperText={<>{state.institution.getError()}</>}
							id="post-head-1"
							color={getFieldColor(state.institution, undefined, true)}
							value={state.institution.getValue()}
							onChange={(e) => {
								formActions.setInstitution(e.target.value);
							}}
							onBlur={() => {
								formActions.validateInstitution();
							}}
							placeholder="My Awesome Post"
							required
							type="text"
						/>
					</div>
					<div className="mb-sys-24">
						<div className="mb-2 block">
							<Label
								htmlFor="post-head-2"
								value="Enter comma separated Attributes"
							/>
						</div>
						<TextInput
							helperText={<>{state.attributes.getError()}</>}
							id="post-head-2"
							color={getFieldColor(state.attributes, undefined, true)}
							value={state.attributes.getValue()}
							onChange={(e) => {
								formActions.setAttributes(e.target.value);
							}}
							onBlur={() => {
								formActions.validateAttributes();
							}}
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
							value={state.description.getValue()}
							onBlur={() => {
								formActions.validateDescription();
							}}
							onChange={(e) => {
								formActions.setDescription(e.target.value);
							}}
							required
							rows={8}
						/>
					</div>
					<div className="mb-sys-24">
						<div className="mb-2 block">
							<Label htmlFor="post-head-5" value="Attachments" />
						</div>
						<div className="mb-sys-15">
							{state.attachments.map((v) => (
								<div className="flex gap-x-3 items-center" key={v.id}>
									<div className="basis-1/3">
										<TextInput
											helperText={<>{v.name.getError()}</>}
											id="post-headsafg"
											color={getFieldColor(v.name, undefined, true)}
											value={v.name.getValue()}
											onChange={(e) => {
												formActions.setNameOfAttachment(v.id, e.target.value);
											}}
											onBlur={() => {
												formActions.validateAttachments();
											}}
											placeholder="My Awesome Post"
											required
											type="text"
										/>
									</div>
									<div className="basis-2/3">
										<TextInput
											helperText={<>{v.name.getError()}</>}
											id="post-head-50"
											color={getFieldColor(v.name, undefined, true)}
											value={v.value.getValue()}
											onChange={(e) => {
												formActions.setValueOfAttachment(v.id, e.target.value);
											}}
											onBlur={() => {
												formActions.validateAttachments();
											}}
											placeholder="My Awesome Post"
											required
											type="text"
										/>
									</div>
									<ButtonBase
										sx={{ padding: 1.618, borderRadius: 20 }}
										onClick={() => {
											formActions.deleteAttachment(v.id);
										}}
									>
										<DeleteIcon />
									</ButtonBase>
								</div>
							))}
						</div>
						<SystemButtons.Regular
							onClick={() => {
								formActions.addAttachment();
							}}
						>
							Add more
						</SystemButtons.Regular>
					</div>
				</div>
			</ResponsiveContainer>
		</Layout>
	);
}

export default CreateInternList;
