namespace AuthGuard {
	interface State {
		isLoggedIn: boolean;
		userDetails: UserDetails | null;
    loading: Record<string, AsyncState>
	}
}
