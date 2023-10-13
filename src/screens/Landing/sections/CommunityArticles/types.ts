export interface CommunityArticleCardProps {
	heading: string;
	category: {
		name: string;
		id: string;
	};
	author: {
		name: string;
		image: string;
		date: string;
	};
	likes: number;
	comments: number;
}
