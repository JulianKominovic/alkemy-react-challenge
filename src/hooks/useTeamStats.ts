import { useHeroesList } from "./useHeroesList";

interface HeroesAvgStats {
  property: string;
  value: number;
}

const useTeamStats = () => {
  const { heroesList } = useHeroesList();
  let avgStats = [
    {
      property: "speed",
      value: 0,
    },
    {
      property: "intelligence",
      value: 0,
    },
    {
      property: "strength",
      value: 0,
    },
    {
      property: "durability",
      value: 0,
    },
    {
      property: "power",
      value: 0,
    },
    {
      property: "combat",
      value: 0,
    },
  ];

  const recalculateStats = (): Array<HeroesAvgStats> => {
    heroesList.forEach((hero: any) => {
      avgStats.forEach((prop) => {
        prop.value =
          prop.value +
          parseInt(
            hero.powerstats[prop.property] === "null"
              ? "0"
              : hero.powerstats[prop.property]
          );
      });
    });
    return avgStats.sort((prev, next) => {
      return next.value - prev.value;
    });
  };

  const recalculateAvgWeight = (): number => {
    let weightAccumulator = 0;
    heroesList.forEach((hero: any) => {
      weightAccumulator += parseInt(hero.appearance.weight[1]);
    });
    return weightAccumulator / heroesList.length;
  };

  const recalculateAvgHeight = (): number => {
    let heightAccumulator = 0;
    heroesList.forEach(
      (hero: any) => (heightAccumulator += parseInt(hero.appearance.height[1]))
    );
    return heightAccumulator / heroesList.length;
  };

  return {
    recalculateStats,
    recalculateAvgWeight,
    recalculateAvgHeight,
  };
};

export default useTeamStats;
