import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import useHeight from "@src/modules/hooks/useHeight";
import { Badge, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import CardList from "../Login/components/CardList/CardList";
import Typography from "@src/components/Typography";
import Navbar from "@src/components/Navbar/Navbar";
import FieldDataClass from "@src/modules/FieldData/FieldDataClass";
//@ts-ignore
import FormActions from "./actions/FormActions";
import { FieldDataService, Validators } from "@src/modules/FieldData/FieldData";
import getFieldColor from "@src/modules/Utils/getFieldColor";
import AsyncStateFactory from "@src/modules/StateManagement/AsyncState/AsyncStateFactory";
import getFieldMessage from "@src/modules/Utils/getFieldMessage";
import getCommonLoadingStatus from "@src/modules/Utils/getCommonLoadingStatus";
import SignupActions from "./actions/SignupActions";
import { useNavigate } from "react-router-dom";

export interface RISignup {}

export namespace PISignup {}

export default function Signup(props: RISignup) {
	const heightHandle = useHeight();

	const marketingComments = [
		"Get access to Research Community Knowledge Drive",
		"Become a member of the community!",
		"Get the latest news and notification",
	];

	const [state, setState] = useState<SignupScreen.State>({
		userName: new FieldDataClass("", Validators.validateNull),
		email: new FieldDataClass(
			"",
			FieldDataService.clubValidators(Validators.validateNull, Validators.email)
		),
		password: new FieldDataClass("", Validators.validateNull),
		loading: {
			checkEmail: AsyncStateFactory(),
			validateAll: AsyncStateFactory(),
			createUser: AsyncStateFactory(),
		},
	});

	const formActions = new FormActions(state, setState);
	const signupActions = new SignupActions(state, setState);

	const navigate = useNavigate(); 


	return (
		<div>
			<div ref={heightHandle.ref}>
				<Navbar />
			</div>
			<div
				style={{
					minHeight: `calc( 100vh - ${heightHandle.height}px )`,
					overflow: "auto",
				}}
			>
				<ResponsiveContainer>
					<div style={{ paddingTop: 42, paddingBottom: 39 }}>
						<Typography.H2 className="font-semibold">
							Fuel the Zeal
						</Typography.H2>
						<Typography.Body>
							Become a part of Research Community Today!
						</Typography.Body>
					</div>
					<div className=" lg:flex">
						<div className="basis-1/2 pr-6">
							{marketingComments.map((v, i) => (
								<div className="mb-3" key={i}>
									<CardList text={v} />
								</div>
							))}
						</div>
						<div className="basis-1/2 pl-6">
							<form>
								<div className="w-full p-8 rounded-xl shadow-md">
									<div
										style={{ marginBottom: 27 }}
										className="flex justify-between"
									>
										<Typography.H3 className="font-semibold text-slate-800">
											Sign Up
										</Typography.H3>

										{state.loading.createUser.status === "failed" && (
											<Badge color="fail">FAILED TO SIGNUP</Badge>
										)}
									</div>

									<div className="mb-4">
										<div className="mb-2 block">
											<Label
												htmlFor="email1"
												value="Your user name"
												color={getFieldColor(state.userName)}
											/>
										</div>
										<TextInput
											id="input1"
											placeholder="tony stark"
											type="text"
											helperText={<>{state.userName.getError()}</>}
											color={getFieldColor(state.userName)}
											onChange={(e) => {
												formActions.setName(e.target.value);
											}}
											onBlur={() => {
												formActions.validateName();
											}}
										/>
									</div>

									<div className="mb-4">
										<div className="mb-2 block">
											<Label
												htmlFor="email1"
												value="Your email"
												color={getFieldColor(state.email)}
											/>
										</div>
										<TextInput
											id="input2"
											placeholder="name@itbhu.ac.in"
											type="email"
											helperText={
												<>
													{getFieldMessage(state.email, {
														loadingState: state.loading.checkEmail,
														messageConfig: {
															onInitializedMessage: "checking email",
														},
													})}
												</>
											}
											color={getFieldColor(
												state.email,
												state.loading.checkEmail
											)}
											onChange={(e) => {
												formActions.setEmail(e.target.value);
											}}
											onBlur={() => {
												formActions.validateEmail();
											}}
										/>
									</div>

									<div className="mb-7">
										<div className="mb-2 block">
											<Label
												htmlFor="password"
												value="Your password"
												color={getFieldColor(state.password)}
											/>
										</div>
										<TextInput
											id="inpu3"
											placeholder="enter your password"
											color={getFieldColor(state.password)}
											type="password"
											helperText={<>{state.password.getError()}</>}
											onChange={(e) => {
												formActions.setPassword(e.target.value);
											}}
											onBlur={() => {
												formActions.validatePassword();
											}}
										/>
									</div>

									<button
										style={{ padding: "11px 0", width: "100%" }}
										className="bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all focus:ring-1 focus:ring-offset-2"
										type="button"
										onClick={() => {
											formActions.validateAll().then((v) => {
												console.log("verdict ", v);
												if (v) signupActions.signup().then(v => {
													navigate('/')
												});
											});
										}}
									>
										<Typography.Body className="text-white font-semibold">
											{!getCommonLoadingStatus(
												state.loading.validateAll,
												state.loading.createUser
											) ? (
												"Signup"
											) : (
												<Spinner />
											)}
										</Typography.Body>
									</button>
								</div>
							</form>
						</div>
					</div>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
