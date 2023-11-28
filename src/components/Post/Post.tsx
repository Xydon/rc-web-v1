import React, { useState } from "react";
import Container from "./components/Container/Container";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Typography from "../Typography";
import Divider from "./components/Divider/Divider";
import PaddingContainer from "./components/PaddingContainer/PaddingContainer";
import AuthorAvatar from "../Avatars/AuthorAvatar/AuthorAvatar";
import SystemButtons from "../Buttons/System/SystemButtons";
import CommentInput from "./components/CommentInput/CommentInput";
import Comment from "./components/Comment/Comment";
import CommentContainer from "./components/CommentContainer/CommentContainer";
import CommentBox from "./components/CommentBox/CommentBox";
import ImageSlideshow from "./components/ImageContainer/ImageContainer";

interface Props {
	maxWidth?: number;
	data: PostData;
	onLike?: () => void;
	onComment?: (e: string) => void;
}

function Post(props: Props) {
	const { maxWidth, data, onLike = () => {}, onComment = (e) => {} } = props;

	const [state, setState] = useState("");

	return (
		<Container maxWidth={maxWidth}>
			<PaddingContainer>
				<ContentContainer>
					<Typography.BodyLarge className="font-medium mb-2">
						{data.heading}
					</Typography.BodyLarge>
					<Typography.Body>{data.body}</Typography.Body>
				</ContentContainer>
			</PaddingContainer>

			<Divider />

			<div className="overflow-hidden">
				<ImageSlideshow images={data.images} />
			</div>

			<Divider />

			<PaddingContainer>
				<div className="flex justify-between h-fit items-center mb-8">
					<AuthorAvatar name={data.user.name} sub={data.createdDate} />
					<div>
						<SystemButtons.Regular
							bgColorClassName={
								data.hasLiked ? "bg-rcBluePrimary text-white" : ""
							}
							onClick={() => {
								onLike();
							}}
						>
							Likes({data.likes})
						</SystemButtons.Regular>
					</div>
				</div>

				<div className="flex gap-x-2">
					<div className="grow">
						<CommentInput
							value={state}
							onChange={(e) => {
								setState(e.target.value);
							}}
							onEnter={() => {
								onComment(state);
								setState("");
							}}
						/>
					</div>
				</div>

				<ContentContainer maxHeight={200}>
					<CommentContainer>
						{data.comments.map((v) => (
							<CommentBox>
								<Comment
									data={{
										userId: v.userId,
										id: v.id,
										postedOn: v.creationDate,
										content: v.commentText,
										userName: v.userName,
									}}
								/>
							</CommentBox>
						))}
					</CommentContainer>
				</ContentContainer>
			</PaddingContainer>
		</Container>
	);
}

export default Post;
