import SystemButtons from "@src/components/Buttons/System/SystemButtons";
import Navbar from "@src/components/Navbar/Navbar";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import useHeight from "@src/modules/hooks/useHeight";
import { Label, TextInput, Textarea } from "flowbite-react";
import React, { useState } from "react";
import CreateArticlePageActions from "./actions/CreateArticlePageActions";
import getFieldColor from "@src/modules/Utils/getFieldColor";
import FieldDataClass from "@src/modules/FieldData/FieldDataClass";
import { Validators } from "@src/modules/FieldData/FieldData";
import { Button } from "@mui/material";
import ReactMarkdown from "react-markdown";
import Markdown from "react-markdown";
import AsyncStateFactory from "@src/modules/StateManagement/AsyncState/AsyncStateFactory";
import ServerActions from "./actions/ServerActions";
// import { useAuthGuardContext } from "@src/AuthGuard/AuthGuard";

export interface RICreateFresh {}

export namespace PICreateFresh {}

export default function CreateFresh(props: RICreateFresh) {
	const heightHandle = useHeight();
	// const userId = useAuthGuardContext();

	const [state, setState] = useState<CreateArticleScreen.State>({
		heading: new FieldDataClass("", Validators.validateNull),
		byLine: new FieldDataClass("", Validators.validateNull),
		body: new FieldDataClass("", Validators.validateNull),
		note: new FieldDataClass(""),
		loading: {
			createArticle: AsyncStateFactory(),
		},
	});

	const createArticlePageActions = new CreateArticlePageActions(
		state,
		setState
	);
	const serverActions = new ServerActions(state, setState);

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
						<div className="flex justify-between">
							<Typography.H2>Create Your Article</Typography.H2>
						</div>

						<div className="flex">
							<div className="mr-2">
								<SystemButtons.Regular
									textColorClassName="text-white"
									bgColorClassName="bg-black"
									borderColorClassName=""
									onClick={() => {
										// serverActions.createArticle()
									}}
								>
									Submit for review
								</SystemButtons.Regular>
							</div>
							<div className="mr-2">
								<SystemButtons.Regular>Discard</SystemButtons.Regular>
							</div>
						</div>
					</div>

					<div className="flex flex-col md:flex-row gap-y-10">
						<div className="basis-1/2">
							<div className="mb-sys-24">
								<div className="mb-2 block">
									<Label htmlFor="art-head" value="Article Heading" />
								</div>
								<TextInput
									helperText={<>{state.heading.getError()}</>}
									color={getFieldColor(state.heading, undefined, true)}
									id="art-head"
									placeholder="The Cat is both dead and alive!"
									required
									type="text"
									onChange={(d) => {
										createArticlePageActions.setHeading(d.target.value);
									}}
									onBlur={() => {
										createArticlePageActions.validateHeading();
									}}
								/>
							</div>
							<div className="mb-sys-24">
								<div className="mb-2 block">
									<Label htmlFor="art-by-line" value="Enter Article ByLine" />
								</div>
								<TextInput
									helperText={<>{state.byLine.getError()}</>}
									color={getFieldColor(state.byLine, undefined, true)}
									id="art-by-line"
									placeholder="Learn how Schrodinger Equation explains the same."
									required
									type="text"
									onChange={(d) => {
										createArticlePageActions.setByLine(d.target.value);
									}}
									onBlur={() => {
										createArticlePageActions.validateByLine();
									}}
								/>
							</div>
							<div className="mb-sys-24">
								<div className="mb-2 block">
									<Label htmlFor="art-body" value="Enter Article Body" />
								</div>
								<Textarea
									color={getFieldColor(state.body, undefined, true)}
									helperText={<>{state.body.getError()}</>}
									id="art-body"
									placeholder="An awesome journey begins here...."
									required
									rows={8}
									onChange={(d) => {
										createArticlePageActions.setBody(d.target.value);
									}}
									onBlur={() => {
										createArticlePageActions.validateBody();
									}}
								/>
							</div>
							<div className="mb-sys-24">
								<div className="mb-2 block">
									<Label htmlFor="art-submit-note" value="Notes for reviewer" />
								</div>
								<Textarea
									color={getFieldColor(state.note, undefined, true)}
									helperText={<>{state.note.getError()}</>}
									id="art-submit-note"
									placeholder="Enter Note"
									rows={4}
									onChange={(d) => {
										createArticlePageActions.setNote(d.target.value);
									}}
									onBlur={() => {
										createArticlePageActions.validateNote();
									}}
								/>
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
						<div className="basis-1/2 md:pl-[63px] markdown-area">
							<p className="mb-10 font-medium">Live Preview</p>

							<div className="mb-sys-39 w-full markdown-area">
								<ReactMarkdown>{state.body.getValue()}</ReactMarkdown>
							</div>
						</div>
					</div>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
