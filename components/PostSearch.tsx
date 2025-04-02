"use client";
import {
  filterPosts,
  selectSearch,
  setSearch,
} from "@/store/slices/postsReducer";
import { AppDispatch } from "@/store/store";
import React, { FormEventHandler } from "react";
import { useDispatch, useSelector } from "react-redux";

export const PostSearch = () => {
  const search = useSelector(selectSearch);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    dispatch(filterPosts());
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    dispatch(setSearch(e.target.value));

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="search"
        onChange={handleSearchChange}
        value={search}
      />
      <button type="submit">Search</button>
    </form>
  );
};
