export const selectUserName = (state) => state.auth.user.name;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectLoading = (state) => state.auth.isLoading;
