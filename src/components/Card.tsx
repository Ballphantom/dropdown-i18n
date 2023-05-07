import Dropdown from "./Dropdown";
import Language from "./Lauguage";

const Card = () => {
  return (
    <div className="bg-gradient-to-l from-indigo-300 from-10% via-sky-300 via-100% rounded shadow-lg mx-auto mt-8 flex flex-row justify-center w-[800px] h-[400px]">
      <div className="bg-gray-200 text-gray-700 text-lg px-6 py-4 flex items-center justify-center">
        <h1 className="font-bold text-xl">Dropdown & i18next</h1>
      </div>
      <div className="w-1/2 p-2">
        <Dropdown />
      </div>
      <div className="w-1/2 p-2">
        <Language />
      </div>
    </div>
  );
};

export default Card;
