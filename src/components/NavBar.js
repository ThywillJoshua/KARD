//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

//logo
import logo from "../img/king.svg";

//react
import { useState } from "react";

//redux
import { loadSearchGames, CLEAR_SEARCHED } from "../store/gamesReducer";
import { useDispatch } from "react-redux";

export default function NavBar() {
  const [searchInput, setSearchInput] = useState("");

  const dispatch = useDispatch();

  const clickSearchHandler = () => {
    setSearchInput("");
    dispatch(loadSearchGames(searchInput));
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      clickSearchHandler();
    }
  };

  const clearSearchedHandler = () => {
    dispatch(CLEAR_SEARCHED());
  };

  return (
    <Nav>
      <Logo onClick={clearSearchedHandler}>
        <img src={logo} alt="logo" />
        <h1>Kard</h1>
      </Logo>
      <div className="search">
        <input
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          onKeyPress={handleKeyPress}
        />
        <button onClick={clickSearchHandler}>Search</button>
      </div>
    </Nav>
  );
}

const Nav = styled(motion.nav)`
  padding: 3rem 5rem 0;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    outline: none;
    font-weight: "Montserrat", sanserif;
  }

  button {
    font-size: 1.5rem;
    padding: 0.5rem 2rem;
    border: none;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;

  img {
    height: 1.5rem;
    width: 2rem;
  }
`;
