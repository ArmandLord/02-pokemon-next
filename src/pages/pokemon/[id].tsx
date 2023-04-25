import Image from "next/image";
import { GetStaticProps, NextPage, GetStaticPaths } from "next";
import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";
import { Layout } from "@/components/layouts/Layout";
import { localFavorites } from "../../../utils";
import { useState } from "react";
import confetti from "canvas-confetti";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isInFavorites, setIsInFavorites] = useState<boolean>(
    localFavorites.existFavoritePokemon(pokemon.id)
  );

  const onToggleFavorites = () => {
    localFavorites.toggleFavorites(pokemon.id);
    setIsInFavorites(!isInFavorites);
    if (!isInFavorites) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  return (
    <Layout title={pokemon.name}>
      <span>
        <div className="flex flex-col-reverse items-center justify-center w-30 h-30 bg-gray-200 rounded-2xl p-10">
          <button
            className={
              isInFavorites
                ? "bg-red-500 text-white font-bold py-2 px-4 rounded"
                : "bg-green-500 text-white font-bold py-2 px-4 rounded"
            }
            onClick={() => onToggleFavorites()}
          >
            {isInFavorites ? "Quitar de favoritos" : "Agregar a favoritos"}
          </button>

          <Image
            priority
            src={
              pokemon.sprites.other?.dream_world.front_default ||
              pokemon.sprites.front_default
            }
            alt={pokemon.name}
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-xl font-bold mt-2">{pokemon.name}</h1>
        <p className="text-gray-500">#{pokemon.id}</p>
      </span>
      <span className="flex items-center justify-center w-30 h-30 p-5">
        <Image
          priority
          src={pokemon.sprites.back_default}
          alt={pokemon.name}
          width={200}
          height={200}
        />
        <Image
          priority
          src={pokemon.sprites.back_shiny}
          alt={pokemon.name}
          width={200}
          height={200}
        />
        <Image
          priority
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width={200}
          height={200}
        />
        <Image
          priority
          src={pokemon.sprites.front_shiny}
          alt={pokemon.name}
          width={200}
          height={200}
        />
      </span>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemos151 = [...Array(151)].map((_, i) => i + 1);

  return {
    paths: pokemos151.map((id) => ({
      params: { id: id.toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
  const { name: pokeName, sprites, id: idPokemon, ...rest } = data;

  return {
    props: {
      pokemon: {
        id: idPokemon,
        name: pokeName,
        sprites,
      },
    },
  };
};

export default PokemonPage;
