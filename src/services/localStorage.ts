export const getAllHeroesLS = () => {
  return JSON.parse(window.localStorage.getItem("heroes") || "[]");
};

export const syncHeroesLS = (heroes: Array<any>) => {
  window.localStorage.setItem("heroes", JSON.stringify(heroes));
};

export const logOutLS = () => {
  window.localStorage.removeItem("token");
  window.location.reload();
};
