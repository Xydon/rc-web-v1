import Navbar from "@src/components/Navbar/Navbar";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import useHeight from "@src/modules/hooks/useHeight";
import React, { useState } from "react";
import CardList from "./components/CardList/CardList";
import { Label, Spinner, TextInput, Badge } from "flowbite-react";
import RotateAndScale from "@src/components/Interaction/RotateAndScale/RotateAndScale";
import { FieldDataService, Validators } from "@src/modules/FieldData/FieldData";
import LoginActions from "./actions/LoginActions";
import FieldDataClass from "@src/modules/FieldData/FieldDataClass";
import getFieldColor from "@src/modules/Utils/getFieldColor";
import LoginServerContact from "./actions/LoginServerActions";
import AsyncStateFactory from "@src/modules/StateManagement/AsyncState/AsyncStateFactory";
import SystemButtons from "@src/components/Buttons/System/SystemButtons";
import { useNavigate } from "react-router-dom";
import { useAuthGuardContext } from "@src/AuthGuard/AuthGuard";

export interface RILogin {}

export namespace PILogin {}

export default function Login(props: RILogin) {
	const [state, setState] = useState<LoginScreen.State>({
		email: new FieldDataClass(
			"",
			FieldDataService.clubValidators(Validators.validateNull, Validators.email)
		),
		password: new FieldDataClass("", Validators.validateNull),
		loading: {
			loggingIn: AsyncStateFactory(),
		},
	});

	const loginActions = new LoginActions(state, setState);
	const loginServerActions = new LoginServerContact(state, setState);

	const navigate = useNavigate();

	const heightHandle = useHeight();
	const {
		actions: { login },
	} = useAuthGuardContext();
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
					<div style={{ paddingTop: 42 }}>
						<Typography.H2 className="font-semibold">
							We Missed You!
						</Typography.H2>
					</div>
					<div className=" lg:flex">
						<div className="basis-1/2 p-5">
							<div className="mb-3"></div>
							<div>
								<CardList text={"login to see what you have missed out!"} />
							</div>
						</div>
						<div className="basis-1/2 p-8">
							<div className="w-full p-8 rounded-xl shadow-md">
								<div
									style={{ marginBottom: 39 }}
									className="flex justify-between"
								>
									<Typography.H3 className="font-semibold text-slate-800">
										Login
									</Typography.H3>
									{state.loading.loggingIn.status === "failed" && (
										<Badge color="failure">
											INCORRECT USERNAME OR PASSWORD
										</Badge>
									)}
								</div>

								<div className="mb-4">
									<div className="mb-2 block">
										<Label htmlFor="email1" value="Your email" />
									</div>
									<TextInput
										helperText={<>{state.email.getError()}</>}
										color={getFieldColor(state.email, undefined, true)}
										onChange={(d) => {
											loginActions.setEmail(d.target.value);
										}}
										onBlur={() => {
											loginActions.validateEmail();
										}}
										id="email1"
										placeholder="name@itbhu.ac.in"
										required
										type="email"
									/>
								</div>

								<div className="mb-7">
									<div className="mb-2 block">
										<Label htmlFor="password" value="Your password" />
									</div>
									<TextInput
										helperText={<>{state.password.getError()}</>}
										color={getFieldColor(state.password, undefined, true)}
										onChange={(d) => {
											loginActions.setPassword(d.target.value);
										}}
										onBlur={() => {
											loginActions.validatePassword();
										}}
										id="passwrod1"
										placeholder="enter your password"
										required
										type="password"
									/>
								</div>
								<SystemButtons.Base
									style={{ padding: "11px 0", width: "100%" }}
									className="bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all focus:ring-1 focus:ring-offset-2"
									onClick={() => {
										if (loginActions.validateAll()) {
											loginServerActions.login((d) => {
												login(d);
												navigate("/");
											});
										}
									}}
									textColorClassName="text-white"
									limit={10}
									loading={state.loading.loggingIn.status === "initialized"}
								>
									<Typography.Body className="text-white font-semibold">
										Login
									</Typography.Body>
								</SystemButtons.Base>
							</div>
						</div>
					</div>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
