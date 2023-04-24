import Image from "next/image";
import { GetStaticProps, NextPage } from "next";
import { GetStaticPaths } from "next";
import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";
import { Layout } from "@/components/layouts/Layout";

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    <Layout title={pokemon.name}>
      <span>
        <div className="flex flex-col items-center justify-center w-30 h-30 bg-gray-200 rounded-2xl p-10">
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
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
