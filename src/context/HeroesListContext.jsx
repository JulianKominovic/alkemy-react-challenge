import { useState, createContext, useEffect } from "react";
import { getAllHeroesLS, syncHeroesLS } from "../services/localStorage";

export const HeroesListContext = createContext();

export const HeroesListProvider = ({ children }) => {
  const [heroesList, setHeroesList] = useState(getAllHeroesLS());
  const getNumberGoodHeroes = () =>
    heroesList.filter((hero) => hero.biography.alignment === "good").length;

  const getNumberBadHeroes = () =>
    heroesList.filter((hero) => hero.biography.alignment !== "good").length;

  const [numberOfGoodHeroes, setNumberOfGoodHeroes] = useState(
    getNumberGoodHeroes()
  );
  const [numberOfBadHeroes, setNumberOfBadHeroes] = useState(
    getNumberBadHeroes()
  );

  useEffect(() => {
    syncHeroesLS(heroesList);
  }, [heroesList]);

  return (
    <HeroesListContext.Provider
      value={{
        heroesList,
        setHeroesList,
        numberOfGoodHeroes,
        setNumberOfGoodHeroes,
        numberOfBadHeroes,
        setNumberOfBadHeroes,
      }}
    >
      {children}
    </HeroesListContext.Provider>
  );
};
