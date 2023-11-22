namespace AuthGuard {
  interface State {
    loginData : null | UserDetails;
    isLoggedIn : boolean; 
    loading : {
      getIsLoggedIn : AsyncState,
      logout : AsyncState
    }
  }
}