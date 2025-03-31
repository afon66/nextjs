import { Metadata } from "next";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

async function getPost(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params }: Props) {
  const { id } = await params;
  const post = await getPost(id);
  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}
