import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import styles from "./page.module.css";
import Link from "next/link";

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

async function getAllPosts(page: string) {
  const response = await fetch(
    `http://localhost:3042/posts?_page=${page}&_per_page=6`
  );
  if (!response.ok) {
    logger.error("Erro ao buscar dados dos posts ):");
    return [];
  }

  logger.info("Posts obtidos com sucesso!");
  return response.json();
}

interface SearchProps {
  searchParams: {
    page: string;
  };
}

export default async function Home({ searchParams }: SearchProps) {
  const page = searchParams.page || "1";
  const { data: posts, prev, next } = await getAllPosts(page);

  return (
    <main>
      <div className={styles.ContentCard}>
        {posts.map((post: Post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
      <div className={styles.Footer}>
        {prev && <Link href={`/?page=${prev}`}> {"<"} Página anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Proxima página {">"}</Link>}
      </div>
    </main>
  );
}
