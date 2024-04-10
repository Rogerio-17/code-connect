import { CardPost } from "@/components/CardPost";
import logger from "@/logger";

interface Post {
  id: number;
  cover: string;
  title: string;
  slug: string;
  body: string;
  markdown: string;
  author: {
    id: number;
    name: string;
    username: string;
    avatar: string;
  };
}

async function getAllPosts() {
  const response = await fetch("http://localhost:3042/posts");
  if (!response.ok) {
    logger.error("Erro ao buscar dados dos posts ):");
    return [];
  }

  logger.info("Posts obtidos com sucesso!");
  return response.json();
}

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main>
      {posts.map((post: Post) => (
        <CardPost key={post.id} post={post} />
      ))}
    </main>
  );
}
