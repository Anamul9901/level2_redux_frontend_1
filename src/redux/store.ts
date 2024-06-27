import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice";
import Logger from "./middleware/Logger";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
  // aita use korle console er devTools kaj korbe nah. production er time e aita use korbo
  // devTools: false,

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger),
});

console.log(store.getState());

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
