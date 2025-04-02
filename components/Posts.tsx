import Link from "next/link";
import { Post } from "@/types/post";

type Props = {
  posts: Post[];
};

export const Posts = ({ posts }: Props) => {
  return (
    <>
      <ul>
        {posts.map((post: Post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
