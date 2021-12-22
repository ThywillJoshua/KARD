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

//Unique Id
import { v4 as uuidv4 } from "uuid";

//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Home() {
  //Get data from store
  const { popularGames, newGames, upcomingGames } = useSelector(
    (state) => state
  );

  //Fetch Games
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPopularGames());
    dispatch(loadNewGames());
    dispatch(loadUpcomingGames());
  }, []);

  return (
    <GameList>
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
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;

  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
