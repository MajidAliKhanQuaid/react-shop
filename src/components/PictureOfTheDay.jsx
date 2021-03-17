export const PictureOfTheDay = (props) => {
  return (
    <>
      <div>
        <img src={props.imagePath} />
        <h1>{props.title}</h1>
      </div>
    </>
  );
};
