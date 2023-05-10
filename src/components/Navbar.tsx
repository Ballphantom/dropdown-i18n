import { useTranslation } from "react-i18next";
import Dropdown from "./Dropdown";
import Language from "./selectLanguage";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-l mx-auto bg-[#27282c] flex flex-row justify-center w-full">
      <div className="text-white p-1 mx-1 font-semibold justify-center items-center">
      <h1 >
        {t("Navbar_title")}
      </h1>
      </div>
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
