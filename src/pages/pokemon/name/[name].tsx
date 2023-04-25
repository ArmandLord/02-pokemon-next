import { pokeApi } from "@/api";
import { Pokemon, PokemonListResponse } from "@/interfaces";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";

interface Props {
  pokemon: Pokemon;
}

const index: NextPage<Props> = ({ pokemon }) => {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <Image
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        width={200}
        height={200}
      />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151`);
  const pokemons151: string[] = data.results.map((pokemon) => pokemon.name);
  return {
    paths: pokemons151.map((name) => ({
      params: { name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${name}`);

  const { name: pokeName, sprites, id, ...rest } = data;

  return {
    props: {
      pokemon: {
        id,
        name: pokeName,
        sprites,
      },
    },
  };
};

export default index;
