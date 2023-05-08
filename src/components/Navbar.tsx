import Dropdown from "./Dropdown";
import Language from "./Lauguage";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-l mx-auto bg-[#27282c] flex flex-row justify-center w-full">
      <div className="w-1/2 flex justify-center items-center">
        <Dropdown />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <Language />
      </div>
    </div>
  );
};

export default Navbar;
