import { Post } from "@/types/post";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type InitialState = {
  posts: Post[];
  isLoading: boolean;
  search: string | "";
};

const initialState: InitialState = {
  posts: [],
  isLoading: false,
  search: "",
};

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) throw new Error("Failed to fetch posts");
  const data = await response.json();
  return data;
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    filterPosts: (state) => {
      state.posts = state.posts.filter((post) => post.title.includes(state.search));
    },
    setSearch: (state, action) => {
      state.search = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      });
  },
});

export const { filterPosts, setSearch } = postsSlice.actions;
export const selectPosts = (state: RootState) => state.posts.posts;
export const selectIsLoading = (state: RootState) => state.posts.isLoading;
export const selectSearch = (state: RootState) => state.posts.search;
