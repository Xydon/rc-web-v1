//* backend types
type Image<T = null> = {
	src: string;
	alt?: string;
};

type UserRole = "user" | "admin";

interface UserDetails {
	id: string;
	name: string;
	email: string;
	password: string;
	dateOfJoining: Date;
	profileImage: Image;
	role: UserRole;
}

interface PostData {
	id: string;
	heading: string;
	subHeading: string;
	images: string[];
	likes: number;
	hasLiked: boolean;
	comments: {
		userId: string;
		creationDate: string;
		commentText: string;
	}[];
}

type ArticleReviewStatus = "submitted" | "accepted" | "rejected";
