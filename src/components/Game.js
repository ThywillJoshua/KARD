//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

//React router
import { Link } from "react-router-dom";

//Redux
import { useDispatch } from "react-redux";
import {
  GET_GAMES_DETAIL_REQUEST,
  GET_GAMES_SCREENSHOT_REQUEST,
} from "../store/detailAction";

//util
import { smallImage } from "./util/util";

import { gameID, gameScreenshots } from "../store/apiUrl";

export default function Game({ name, releaseDate, id, image }) {
  const dispatch = useDispatch();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(GET_GAMES_DETAIL_REQUEST({ url: gameID(id) }));
    dispatch(GET_GAMES_SCREENSHOT_REQUEST({ url: gameScreenshots(id) }));
  };

  return (
    <StyledGame layoutId={id} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{releaseDate}</p>
        <img src={smallImage(image, 640)} alt={name} />
      </Link>
    </StyledGame>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    flex: 1;
  }
`;
