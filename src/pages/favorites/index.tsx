import { useEffect, useState } from "react";
import Image from "next/image";
import { Layout } from "@/components/layouts/Layout";
import { localFavorites } from "../../../utils";
import { useRouter } from "next/router";

const FavoritePokemon = () => {
  const [pokemonList, setPokemonList] = useState<number[]>([]);
  useEffect(() => {
    setPokemonList(localFavorites.getListPokemons());
  }, []);
  const router = useRouter();

  return (
    <Layout title="Favorites">
      {pokemonList.length === 0 ? (
        <div className="w-full flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold text-gray-500 py-10">
            No hay favoritos
          </h2>
          <Image
            src={
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
            }
            alt="empty"
            width={200}
            height={200}
          />
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {pokemonList.map((pokemonId) => (
            <div
              onClick={() => router.push(`/pokemon/${pokemonId}`)}
              key={pokemonId}
              className="flex flex-col items-center justify-center w-30 h-30 bg-gray-200 rounded-2xl p-10 hover:cursor-pointer"
            >
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                alt="pokemon"
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default FavoritePokemon;
