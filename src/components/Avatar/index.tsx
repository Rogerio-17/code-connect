import Image from "next/image";

interface AvatarProps {
  name: string;
  imageURL: string;
}

export function Avatar({ name, imageURL }: AvatarProps) {
  return (
    <ul>
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
