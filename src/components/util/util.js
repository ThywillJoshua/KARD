//Media resize
export const smallImage = (imgPath, size) => {
  const img = imgPath.match(/media\/screenshots/)
    ? imgPath.replace("media/screenshots", `media/resize/${size}/-/screenshots`)
    : imgPath.replace(`/media/games/`, `/media/resize/${size}/-/games/`);

  return img;
};
