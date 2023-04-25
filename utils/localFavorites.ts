const toggleFavorites = (id: number): void => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokemon) => pokemon !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existFavoritePokemon = (id: number): boolean => {
  if (typeof window === "undefined") return false;
  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
};

const getListPokemons = (): number[] => {
  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  return favorites;
};

export default { toggleFavorites, existFavoritePokemon, getListPokemons };
