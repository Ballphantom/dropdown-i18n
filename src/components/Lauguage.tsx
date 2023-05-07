import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

function Dropdown() {
  const { t, i18n } = useTranslation("common");

  const changeLanguage = (lang: any) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="Dropdown-container">
      <div className="w-50">
        <Menu as="div" className="relative inline-block text-left my-[1rem]">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-blue-600 opacity-70 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none shadow-md">
              {t("Language")}
              <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 text-white hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-non">
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-blue-200 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => changeLanguage("en")}
                    >
                      English
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-blue-200 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      onClick={() => changeLanguage("th")}
                    >
                      ไทย
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </div>
        </Menu>
      </div>
    </div>
  );
}

export default Dropdown;
