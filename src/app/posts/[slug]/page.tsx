import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import Image from "next/image";
import { remark } from "remark";
import html from "remark-html";

async function getPostBySlug(slug: string) {
  const url = `http://localhost:3042/posts?slug=${slug}`;
  const response = await fetch(url);

  if (!response.ok) {
    logger.error("Erro ao buscar post ):");
    return {};
  }

  logger.info("Post obtido com sucesso!");
  const data = await response.json();
  if (data.length == 0) {
    return {};
  }

  const post = data[0];
  const processedContent = await remark().use(html).process(post.markdown);
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml;

  return post;
}

interface SearchProps {
  params: {
    slug: string;
  };
}

export default async function PagePosts({ params }: SearchProps) {
  const slug = params.slug;
  const post = await getPostBySlug(slug);

  return (
    <div>
      <h1 style={{ color: "white" }}>{post.title}</h1>
      <Image src={post.cover} width={765} height={325} alt="Logo do projeto" />
      <p
        style={{
          padding: "0.5rem",
          width: "50vw",
          color: "#bcbcbc",
          marginTop: "2rem",
        }}
      >
        {post.body}
      </p>
      <div
        style={{
          background: " #171d1f",
          padding: "0.5rem",
          width: "50vw",
          color: "#bcbcbc",
          marginTop: "2rem",
        }}
        dangerouslySetInnerHTML={{ __html: post.markdown }}
      />
    </div>
  );
}
