import { Metadata } from "next";

type Props = {
  params: {
    id: string;
  };
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

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const post = await getPost(id);

  return {
    title: post.title,
  };
}

export default async function Post({
  params: { id },
}: Props) {
  const post = await getPost(id);
  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}
