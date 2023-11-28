namespace CommunityPosts {
	interface State {
		posts: PostData[];
    loading: Record<string, AsyncState>
	}
}
