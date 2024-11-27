const Rank = ({ name, entries }: { name: string; entries: number }) => {
  return (
    <div className="text-white text-center">
      <div className=" text-xl">{`${name} your current rank is...`}</div>
      <div className="text-3xl">{entries}</div>
    </div>
  );
};

export default Rank;
