import { Badge, Chip, Input } from "@mui/material";
import Layout from "@src/components/Layout/Layout";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import { TextInput } from "flowbite-react";
import React, { useState } from "react";
import AttributeChip from "./components/AttributeChip/AttributeChip";
import InternListTable from "./components/InternListTable/InternListTable";
import Divider from "@src/components/ArticleCards/Base/Divider/Divider";
import ServerActions from "./actions/ServerActions";

const dummyData = [
	{
		name: "Item 1",
		description: "Description for Item 1",
		attachments: [
			{ link: "https://placekitten.com/50/50", alt: "Attachment 1" },
			{ link: "https://placekitten.com/51/51", alt: "Attachment 2" },
		],
		postedOn: new Date("2023-01-01"),
		institution: "Institution A",
		attributes: "Attribute A",
		isActive: true,
	},
	{
		name: "Item 2",
		description: "Description for Item 2",
		attachments: [
			{ link: "https://placekitten.com/52/52", alt: "Attachment 3" },
			{ link: "https://placekitten.com/53/53", alt: "Attachment 4" },
		],
		postedOn: new Date("2023-02-02"),
		institution: "Institution B",
		attributes: "Attribute B",
		isActive: false,
	},
	{
		name: "Item 3",
		description: "Description for Item 3",
		attachments: [
			{ link: "https://placekitten.com/54/54", alt: "Attachment 5" },
			{ link: "https://placekitten.com/55/55", alt: "Attachment 6" },
		],
		postedOn: new Date("2023-03-03"),
		institution: "Institution C",
		attributes: "Attribute C",
		isActive: true,
	},
	{
		name: "Item 4",
		description: "Description for Item 4",
		attachments: [
			{ link: "https://placekitten.com/56/56", alt: "Attachment 7" },
			{ link: "https://placekitten.com/57/57", alt: "Attachment 8" },
		],
		postedOn: new Date("2023-04-04"),
		institution: "Institution D",
		attributes: "Attribute D",
		isActive: false,
	},
	{
		name: "Item 5",
		description: "Description for Item 5",
		attachments: [
			{ link: "https://placekitten.com/58/58", alt: "Attachment 9" },
			{ link: "https://placekitten.com/59/59", alt: "Attachment 10" },
		],
		postedOn: new Date("2023-05-05"),
		institution: "Institution E",
		attributes: "Attribute E",
		isActive: true,
	},
];

function ResearchInterns() {
	const [state, setState] = useState<ResearchInterns.State>({
		internList: [],
		loading: {},
		query: "",
	});

  //* use to set in the interns and fetch them
  const actions = new ServerActions(state, setState); 

	return (
		<Layout>
			<ResponsiveContainer style={{ paddingBottom: 200 }}>
				<div className="flex justify-between items-center mb-sys-63">
					<div>
						<Typography.H2>Research Interns</Typography.H2>
						<Typography.BodyEmphasis className="text-rcGreenPrimary font-semibold">
							30 Interns
						</Typography.BodyEmphasis>
					</div>
					<TextInput
						placeholder="filter interns"
						className="active:border-0 active:shadow-md transition-all active:outline-0 active:ring-0 focus:outline-0 focus:ring-0"
					/>
				</div>

				<div className="mb-sys-39">
					<Typography.BodyEmphasis className="mb-sys-15 font-medium">
						Attributes
					</Typography.BodyEmphasis>
					<div className="flex flex-wrap">
						<AttributeChip text={"Attribute 1"} count={0} />
					</div>
				</div>

				<div className="mb-sys-39">
					<Divider />
				</div>

				<div>
					<Typography.H3>Intern List Table</Typography.H3>
					<InternListTable data={state.internList} />
				</div>
			</ResponsiveContainer>
		</Layout>
	);
}

export default ResearchInterns;
