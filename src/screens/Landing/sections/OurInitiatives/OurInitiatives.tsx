import React from "react";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import { Accordion } from "flowbite-react";

export interface RIOurInitiatives {}

export namespace PIOurInitiatives {}

export default function OurInitiatives(props: RIOurInitiatives) {
	return (
		<div>
			<ResponsiveContainer>
				<div className="w-1/2" style={{ marginBottom: 63 }}>
					<div style={{ marginBottom: 24 }}>
						<Typography.H2 style={{ fontWeight: 600 }}>
							Our Initiatives
						</Typography.H2>
					</div>
					<div>
						<Typography.BodyEmphasis className="text-slate-500">
							We here at research community strive to bring about the change
							through our work and initiatives, we have listed them below for
							your reference and navigation.
						</Typography.BodyEmphasis>
					</div>
				</div>

				<div
					style={{ padding: 48, borderRadius: 8, marginBottom: 48 }}
					className="bg-slate-50 border-slate-300 border"
				>
					<div style={{ marginBottom: 48 }}>
						<Typography.H3>Research and Informatic Articles</Typography.H3>
					</div>
					<div>
						<Accordion style={{ background: "white" }} className="shadow">
							<Accordion.Panel>
								<Accordion.Title>What is Flowbite?</Accordion.Title>
								<Accordion.Content>
									<p className="mb-2 text-gray-500 dark:text-gray-400">
										Flowbite is an open-source library of interactive components
										built on top of Tailwind CSS including buttons, dropdowns,
										modals, navbars, and more.
									</p>
								</Accordion.Content>
							</Accordion.Panel>
						</Accordion>
					</div>
				</div>

				<Typography.BodyEmphasis
					className="font-semibold"
					style={{ marginBottom: 24 }}
				>
					Community
				</Typography.BodyEmphasis>
				<div
					style={{ padding: 48, borderRadius: 8, marginBottom: 48 }}
					className="bg-slate-50 border-slate-300 border"
				>
					<div style={{ marginBottom: 48 }}>
						<Typography.H3>Community Feature</Typography.H3>
					</div>
					<div>
						<Accordion style={{ background: "white" }} className="shadow">
							<Accordion.Panel>
								<Accordion.Title>What is Flowbite?</Accordion.Title>
								<Accordion.Content>
									<p className="mb-2 text-gray-500 dark:text-gray-400">
										Flowbite is an open-source library of interactive components
										built on top of Tailwind CSS including buttons, dropdowns,
										modals, navbars, and more.
									</p>
								</Accordion.Content>
							</Accordion.Panel>
						</Accordion>
					</div>
				</div>
			</ResponsiveContainer>
		</div>
	);
}
