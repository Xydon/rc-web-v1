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
	body : string;
	images: string[];
	likes: number;
	hasLiked: boolean;
	createdDate: string;
	user : {
		name: string; 
		id: string; 
	}
	comments: {
		id: string;
		userId: string;
		userName: string; 
		creationDate: string;
		commentText: string;
	}[];
}

interface CommunityArticle {
	id: string;
	heading: string;
	subheading: string;
	category?: {
		id: string;
		name: string;
	};
	author: {
		id: string;
		name: string;
		dateOfCreation: string;
	};
	meta: {
		likes: number;
		comments: number;
	};
}

type ArticleReviewStatus = "submitted" | "accepted" | "rejected";
