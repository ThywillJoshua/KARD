//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";

//Unique Id
import { v4 as uuidv4 } from "uuid";

//Redux
import { useSelector } from "react-redux";

export default function GameDetail() {
  const { description, screenshots } = useSelector((state) => state.detail);

  console.log(description, screenshots);

  return (
    <div className="card-shadow">
      <div className="detail">
        {description && (
          <>
            <div className="stats">
              <div className="rating">
                <h3>{description[0].name}</h3>
                <p>Rating {description[0].rating}</p>
              </div>
              <div className="info">
                <h3>Platforms</h3>
                <div className="platforms">
                  {description[0].platforms.map((data) => {
                    return <h3 key={uuidv4()}>{data.platform.name}</h3>;
                  })}
                </div>
              </div>
            </div>
            <div className="media">
              <img src={description[0].background_image} alt="background" />
            </div>
            <div className="gallery">
              {screenshots.results.map((screen) => (
                <img key={uuidv4()} src={screen.image} alt={"screenshots"} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
