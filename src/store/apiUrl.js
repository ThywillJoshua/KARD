//Base URL
export const base_url = `https://api.rawg.io/api`;

//Get Date
const getAllDate = () => {
  const day = String(new Date().getDate()).padStart(2, "0");
  const month = String(new Date().getMonth() + 1).padStart(2, "0");
  const year = String(new Date().getFullYear());

  const currentDate = `${year}-${month}-${day}`;
  const lastYear = `${+year - 1}-${month}-${day}`;
  const nextYear = `${+year + 1}-${month}-${day}`;

  return { currentDate, lastYear, nextYear };
};

const { currentDate, lastYear } = getAllDate();

//Popular Games
export const popular_games = `/games?key=dcff681c6bb14785bbd735ff2588acad&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popular_games}`;
