import Layout from "@src/components/Layout/Layout";
import ResponsiveContainer from "@src/components/ResponsiveContainer/ResponsiveContainer";
import Typography from "@src/components/Typography";
import React from "react";

function UnAuthPage() {
	return (
		<div>
			<Layout>
				<ResponsiveContainer>
					<div className="flex justify-between">
						<div>
							<Typography.H2 className="font-semibold">UNAUTHORIZED</Typography.H2>
							<Typography.BodyLarge>
								Please Login to avail the services
							</Typography.BodyLarge>
						</div>
					</div>
				</ResponsiveContainer>
			</Layout>
		</div>
	);
}

export default UnAuthPage;
