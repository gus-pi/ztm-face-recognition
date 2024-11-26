const FaceRecognition = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className="flex justify-center">
      <div className="absolute mt-2">
        <img src={imageUrl} alt="" width="500px" height="auto" />
      </div>
    </div>
  );
};

export default FaceRecognition;
