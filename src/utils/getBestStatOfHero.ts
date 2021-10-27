const getBestStatOfHero = (hero: any): string => {
  const sortArray = Object.entries(hero.powerstats).sort((a: any, b: any) => {
    const statPrev = b[1] === "null" ? "0" : b[1];
    const statCurr = a[1] === "null" ? "0" : a[1];
    return parseInt(statPrev) - parseInt(statCurr);
  });

  if (sortArray[0][1] === "null") {
    return `${
      sortArray[0][0].charAt(0).toUpperCase() + sortArray[0][0].slice(1)
    } 0`;
  }

  return `${
    sortArray[0][0].charAt(0).toUpperCase() + sortArray[0][0].slice(1)
  } ${sortArray[0][1]}`;
};

export default getBestStatOfHero;
