import { useEffect } from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";

import {
  loadPopularGames,
  loadUpcomingGames,
  loadNewGames,
} from "../store/gamesReducer";

//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

//Unique Id
import { v4 as uuidv4 } from "uuid";

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

//React Router
import { useLocation } from "react-router-dom";

export default function Home() {
  //Get data from store
  const state = useSelector((state) => state);
  const { popularGames, newGames, upcomingGames, searchGames, error, loading } =
    state.games;

  //Game Detail Data
  const { description } = useSelector((state) => state.detail);

  //Fetch Games
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPopularGames());
    dispatch(loadNewGames());
    dispatch(loadUpcomingGames());
  }, [dispatch]);

  //React router
  const location = useLocation().pathname.split("/");
  const pathId = location[2];

  return (
    <GameList>
      {pathId && description[0] && <GameDetail />}

      {loading && <h3>Please wait...</h3>}
      {error && <h3>Oops! Something went wrong</h3>}

      {searchGames[0] && (
        <>
          <h2>Top 6 Results</h2>
          <Games>
            {searchGames.map((game) => (
              <Game
                key={uuidv4()}
                name={game.name}
                releaseDate={game.released}
                id={game.id}
                image={game.background_image}
              />
            ))}
          </Games>
        </>
      )}

      {upcomingGames[0] && (
        <>
          <h2>Upcoming Games</h2>
          <Games>
            {upcomingGames.map((game) => (
              <Game
                key={uuidv4()}
                name={game.name}
                releaseDate={game.released}
                id={game.id}
                image={game.background_image}
              />
            ))}
          </Games>
        </>
      )}
      {popularGames[0] && (
        <>
          <h2>Popular Games</h2>
          <Games>
            {popularGames.map((game) => (
              <Game
                key={uuidv4()}
                name={game.name}
                releaseDate={game.released}
                id={game.id}
                image={game.background_image}
              />
            ))}
          </Games>
        </>
      )}

      {newGames[0] && (
        <>
          <h2>New Games</h2>
          <Games>
            {newGames.map((game) => (
              <Game
                key={uuidv4()}
                name={game.name}
                releaseDate={game.released}
                id={game.id}
                image={game.background_image}
              />
            ))}
          </Games>
        </>
      )}
    </GameList>
  );
}

const GameList = styled(motion.div)`
  max-width: 90vw;
  margin: auto;

  h2 {
    padding: 4rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-template-rows: repeat(1, 35rem);
  grid-auto-rows: 35rem;
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
