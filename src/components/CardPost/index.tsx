import Image from "next/image";
import { Avatar } from "../Avatar";
import style from "./cardPost.module.css";

interface CardPostProps {
  post: {
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
  };
}

export function CardPost({ post }: CardPostProps) {
  return (
    <article className={style.card}>
      <header className={style.header}>
        <figure>
          <Image
            src={post.cover}
            width={438}
            height={133}
            alt={`Capa do post de titulo: ${post.title}`}
          />
        </figure>
      </header>

      <section className={style.body}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>

      <footer className={style.footer}>
        <Avatar imageURL={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
}
