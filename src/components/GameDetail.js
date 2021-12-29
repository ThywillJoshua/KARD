//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

//Unique Id
import { v4 as uuidv4 } from "uuid";

//Util
import { smallImage, getPlatform, getStars } from "./util/util";

//Redux
import { useSelector } from "react-redux";

//React Router
import { useNavigate } from "react-router-dom";

export default function GameDetail() {
  const navigate = useNavigate();

  //Exit detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      navigate("/");
    }
  };

  //Data
  const { description, screenshots, loading } = useSelector(
    (state) => state.detail
  );

  return (
    <CardShadow className="shadow" onClick={exitDetailHandler}>
      {
        <Detail>
          {!loading && description[0] && (
            <>
              <Stats>
                <div className="rating">
                  <h3>{description[0].name}</h3>
                  {/* <p>Rating {description[0].rating}</p> */}
                  {getStars(description[0].rating)}
                </div>
                <Info>
                  <h3>Platforms</h3>
                  <Platforms>
                    {description[0].platforms.map((data) => {
                      return (
                        <img
                          src={getPlatform(data.platform.name)}
                          alt="platform name"
                          key={uuidv4()}
                        />
                      );
                    })}
                  </Platforms>
                </Info>
              </Stats>
              <Media>
                <img
                  src={smallImage(description[0].background_image, 1280)}
                  alt="background"
                />
              </Media>
              <Description>
                <p>{description[0].description_raw}</p>
              </Description>
              <div className="gallery">
                {screenshots.results &&
                  screenshots.results.map((screen) => (
                    <img
                      key={uuidv4()}
                      src={smallImage(screen.image, 1280)}
                      alt={"screenshots"}
                    />
                  ))}
              </div>
            </>
          )}

          {loading && <h3>Please wait...</h3>}
        </Detail>
      }
    </CardShadow>
  );
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;

  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 8rem;
  background: #fff;
  position: absolute;
  left: 10%;
  color: black;

  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;

  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0;
`;
