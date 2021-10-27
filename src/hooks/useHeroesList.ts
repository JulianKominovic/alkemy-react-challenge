import { HeroesListContext } from "../context/HeroesListContext";
import { useContext } from "react";

export const useHeroesList = () => {
  const {
    heroesList,
    setHeroesList,
    numberOfGoodHeroes,
    numberOfBadHeroes,
    setNumberOfBadHeroes,
    setNumberOfGoodHeroes,
  } = useContext(HeroesListContext);

  const verifyNewHero = (hero: any): string => {
    if (
      heroesList.map((heroLocal: any) => heroLocal.id).indexOf(hero.id) !== -1
    )
      return "You already have this hero.";
    if (hero.biography.alignment === "bad") {
      if (numberOfBadHeroes >= 3) {
        return "Max amount of bad heroes reached.";
      }
    }
    if (hero.biography.alignment === "good") {
      if (numberOfGoodHeroes >= 3) {
        return "Max amount of good heroes reached.";
      }
    }
    if (
      hero.biography.alignment !== "bad" &&
      hero.biography.alignment !== "good"
    ) {
      if (numberOfBadHeroes >= 3) {
        return "Max amount of bad heroes reached.";
      }
    }
    return "Hero added!";
  };

  const addHeroToList = (hero: any): any => {
    const verifyNewHeroStatus: string = verifyNewHero(hero);
    if (verifyNewHeroStatus === "Hero added!") {
      if (hero.biography.alignment !== "good") {
        if (numberOfBadHeroes < 3) {
          setNumberOfBadHeroes(numberOfBadHeroes + 1);
          setHeroesList((prev: any) => [...prev, hero]);
        }
      } else {
        if (numberOfGoodHeroes < 3) {
          setNumberOfGoodHeroes(numberOfGoodHeroes + 1);
          setHeroesList((prev: any) => [...prev, hero]);
        }
      }
    }

    return verifyNewHeroStatus;
  };

  const isHeroOnTeam = (id: number): boolean => {
    return heroesList.findIndex((hero: any) => hero.id === id) === -1
      ? false
      : true;
  };

  const removeHeroById = (id: number) => {
    heroesList[heroesList.findIndex((hero: any) => hero.id === id)].biography
      .alignment !== "good"
      ? setNumberOfBadHeroes(numberOfBadHeroes - 1)
      : setNumberOfGoodHeroes(numberOfGoodHeroes - 1);

    setHeroesList(heroesList.filter((hero: any) => hero.id !== id.toString()));
  };

  return {
    heroesList,
    addHeroToList,
    removeHeroById,
    isHeroOnTeam,
  };
};
