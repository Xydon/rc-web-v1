import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import useHeight from "@src/modules/hooks/useHeight";
import { Label, TextInput } from "flowbite-react";
import React from "react";
import CardList from "../Login/components/CardList/CardList";
import Typography from "@src/components/Typography";
import Navbar from "@src/components/Navbar/Navbar";

export interface RISignup {}

export namespace PISignup {}

export default function Signup(props: RISignup) {
	const heightHandle = useHeight();

	const marketingComments = [
		"Get access to Research Community Knowledge Drive",
		"Become a member of the community!",
		"Get the latest news and notification",
	];

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
									<div style={{ marginBottom: 27 }}>
										<Typography.H3 className="font-semibold text-slate-800">
											Sign Up
										</Typography.H3>
									</div>

									<div className="mb-4">
										<div className="mb-2 block">
											<Label htmlFor="email1" value="Your user name" />
										</div>
										<TextInput
											id="input1"
											placeholder="tony stark"
											required
											type="text"
										/>
									</div>

									<div className="mb-4">
										<div className="mb-2 block">
											<Label htmlFor="email1" value="Your email" />
										</div>
										<TextInput
											id="input2"
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
											id="inpu3"
											placeholder="enter your password"
											required
											type="password"
										/>
									</div>

									<button
										style={{ padding: "11px 0", width: "100%" }}
										className="bg-indigo-500 rounded-md hover:bg-indigo-600 transition-all focus:ring-1 focus:ring-offset-2"
										type="submit"
									>
										<Typography.Body className="text-white font-semibold">
											Login
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
