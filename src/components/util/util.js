//Convert Game name to image
import playstation from "../../img/playstation.svg";
import steam from "../../img/steam.svg";
import xbox from "../../img/xbox.svg";
import nintendo from "../../img/nintendo.svg";
import apple from "../../img/apple.svg";
import gamepad from "../../img/gamepad.svg";

//star images
import starEmpty from "../../img/star-empty.png";
import starFull from "../../img/star-full.png";

//Media resize
export const smallImage = (imgPath, size) => {
  if (imgPath && size) {
    const img = imgPath.match(/media\/screenshots/)
      ? imgPath.replace(
          "media/screenshots",
          `media/resize/${size}/-/screenshots`
        )
      : imgPath.replace(`/media/games/`, `/media/resize/${size}/-/games/`);

    return img;
  }
};

export const getPlatform = (platform) => {
  switch (true) {
    case platform.includes("PlayStation"):
      return playstation;
    case platform.includes("Xbox"):
      return xbox;
    case platform.includes("PC"):
      return steam;
    case platform.includes("Nintendo"):
      return nintendo;
    case platform.includes("iOS"):
      return apple;
    default:
      return gamepad;
  }
};

//Get stars
export const getStars = (gameRating = 4) => {
  const stars = [];
  const rating = Math.floor(gameRating);
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<img alt="star" key={i} src={starFull} />);
    } else {
      stars.push(<img alt="star" key={i} src={starEmpty} />);
    }
  }

  return stars;
};
