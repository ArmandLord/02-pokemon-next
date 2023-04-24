import React, { FC } from "react";
import Image from "next/image";
import { Result } from "@/interfaces";
import { useRouter } from "next/router";

interface Props {
  pokemon: Result;
}

export const Cards: FC<Props> = ({ pokemon }) => {
  const { name, img, id } = pokemon;

  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <li
      onClick={() => handleClick(id)}
      className="flex flex-col items-center justify-center w-1/4 p-4 hover:cursor-pointer"
    >
      <div className="flex flex-col items-center justify-center w-40 h-40 bg-gray-200 rounded-full">
        <Image priority src={img} alt={name} width={200} height={200} />
      </div>
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-gray-500">#{id}</p>
    </li>
  );
};
