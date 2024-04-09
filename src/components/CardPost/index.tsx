import Image from "next/image";
import { Avatar } from "../Avatar";

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
    <article>
      <header>
        <figure>
          <Image
            src={post.cover}
            width={438}
            height={133}
            alt={`Capa do post de titulo: ${post.title}`}
          />
        </figure>
      </header>

      <section>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>

      <footer>
        <Avatar imageURL={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
}
