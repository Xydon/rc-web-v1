import React from "react";
import Container from "./components/Container/Container";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Typography from "../Typography";
import Divider from "./components/Divider/Divider";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import PaddingContainer from "./components/PaddingContainer/PaddingContainer";
import AuthorAvatar from "../Avatars/AuthorAvatar/AuthorAvatar";
import SystemButtons from "../Buttons/System/SystemButtons";
import CommentInput from "./components/CommentInput/CommentInput";
import Comment from "./components/Comment/Comment";
import CommentContainer from "./components/CommentContainer/CommentContainer";
import CommentBox from "./components/CommentBox/CommentBox";

function Post() {
	return (
		<Container>
			<PaddingContainer>
				<ContentContainer>
					<Typography.BodyLarge className="font-medium mb-2">
						Heading
					</Typography.BodyLarge>
					<Typography.Body>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
						ab incidunt quidem placeat eligendi obcaecati debitis? Ea,
						reprehenderit aliquam veritatis doloribus alias aut aspernatur
						dolores totam cumque assumenda minus voluptatem laudantium ab
						deleniti ullam vel rem consequatur facere quas? Ratione, enim!
						Deserunt laborum repellat perferendis, quidem fugit at soluta quos
						dolore quae ducimus velit voluptates possimus excepturi tenetur
						animi molestiae tempora! At hic vero dolorem inventore ipsa rem sit
						impedit reprehenderit perspiciatis praesentium error, totam
						necessitatibus debitis eius aspernatur. Iste, dolorum? Quaerat
						officia, ex optio eum at velit iusto dolorum autem nobis! Labore
						beatae maxime expedita facilis ea corrupti voluptatibus?
					</Typography.Body>
				</ContentContainer>
			</PaddingContainer>

			<Divider />

			<ImageContainer src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg" />

			<Divider />

			<PaddingContainer>
				<div className="flex justify-between h-fit items-center mb-8">
					<AuthorAvatar />
					<div>
						<SystemButtons.Regular>Likes(30)</SystemButtons.Regular>
					</div>
				</div>

				<CommentInput />

				<ContentContainer maxHeight={200}>
					<CommentContainer>
						<CommentBox>
							<Comment />
						</CommentBox>
						<CommentBox>
							<Comment />
						</CommentBox>
						<CommentBox>
							<Comment />
						</CommentBox>
						<CommentBox>
							<Comment />
						</CommentBox>
						<CommentBox>
							<Comment />
						</CommentBox>
					</CommentContainer>
				</ContentContainer>
			</PaddingContainer>
		</Container>
	);
}

export default Post;
