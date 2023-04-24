import { ReactElement } from "react";
import { Layout } from "@/components/layouts/Layout";
import { pokeApi } from "@/api";
import { PokemonListResponse, Result } from "@/interfaces";
import { Cards } from "../components/Cards";
import { GetStaticProps } from "next";

interface Props {
  pokemons: Result[];
}

export default function Home({ pokemons }: Props) {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {pokemons.map((pokemon) => (
          <Cards key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="Pokemon App">{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>("/pokemon?limit=151");
  const pokemons: Result[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      i + 1
    }.png`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};
