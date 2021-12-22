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

const { currentDate, lastYear, nextYear } = getAllDate();

//Base URL
export const base_url = `https://api.rawg.io/api`;

//Popular Games
export const popularGames = `/games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

//Upcoming Games
export const upcomingGames = `/games?key=${process.env.REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

//New Games
export const newGames = `/games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//Game Details
export const gameID = (game_id) =>
  `/games/${game_id}?key=${process.env.REACT_APP_API_KEY}`;

//Game Screenshots
export const gameScreenshots = (game_pk) =>
  `/games/${game_pk}/screenshots?key=${process.env.REACT_APP_API_KEY}`;
