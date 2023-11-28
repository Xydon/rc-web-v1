namespace MyPosts {
	interface State {
		posts: PostData[];
    loading: Record<string, AsyncState>
	}
}
