import Image from "next/image";
import styles from "./avatar.module.css";
interface AvatarProps {
  name: string;
  imageURL: string;
}

export function Avatar({ name, imageURL }: AvatarProps) {
  return (
    <ul className={styles.avatar}>
      <li>
        <Image
          src={imageURL}
          width={32}
          height={32}
          alt={`Avatar do(a) ${name}`}
        />
      </li>
      <li>@{name}</li>
    </ul>
  );
}
