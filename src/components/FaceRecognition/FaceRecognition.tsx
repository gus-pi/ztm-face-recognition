import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }: { imageUrl: string; box: any }) => {
  return (
    <div className="flex justify-center">
      <div className="absolute mt-2">
        <img
          id="inputimage"
          src={imageUrl}
          alt=""
          width="500px"
          height="auto"
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
