"use client";
import { Posts } from "@/components/Posts";
import { useEffect } from "react";
import { PostSearch } from "@/components/PostSearch";
import { useDispatch, useSelector } from "react-redux";
import {
  getPosts,
  selectIsLoading,
  selectPosts,
} from "@/store/slices/postsReducer";
import { AppDispatch } from "@/store/store";

export default function Blog() {
  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <h1>Blog page</h1>
      <PostSearch />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h2>Blog page</h2>
          <Posts posts={posts} />
        </>
      )}
    </>
  );
}
