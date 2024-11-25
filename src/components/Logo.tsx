import Tilt from 'react-parallax-tilt';

const Logo = () => {
  return (
    <div className="mx-4 mt-0 b2">
      <Tilt
        scale={1.1}
        className="bg-gradient-to-r from-[#ff5edf] to-[#04c8de] track-on-window rounded-sm w-[150px] h-[150px] shadow-md content-center"
      >
        <img
          src="public\brain.png"
          alt="logo"
          className="w-[100px] h-[100px] mx-auto"
        />
      </Tilt>
    </div>
  );
};

export default Logo;
