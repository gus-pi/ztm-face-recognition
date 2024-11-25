import './ImageLinkForm.css';

type FormProps = {
  onQueryChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
};

const ImageLinkForm = ({ onQueryChange, onSubmit }: FormProps) => {
  return (
    <div className="text-center py-4">
      <p className="text-xl">
        {'The Magic Brain will detect faces in your pictures. Give it a try!'}
      </p>
      <div className="flex justify-center py-3">
        <div className="form p-6 rounded-md">
          <input
            type="text"
            className="text-xl w-[70%]"
            onChange={onQueryChange}
          />
          <button
            type="submit"
            onClick={onSubmit}
            className="w-[30%] transition duration-300 ease-in-out hover:scale-105 text-lg link px-3 inline-block text-white bg-purple-500"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
