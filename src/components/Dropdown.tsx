import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";

function Dropdown() {
  const { t } = useTranslation();

  return (
    <div className="Dropdown-container">
      <div className="">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none shadow-md">
              {t("Menu")}
              <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 text-white hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-non">
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? "bg-blue-200 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      href="#"
                    >
                      {t("Profile")}
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? "bg-blue-200 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      href="#"
                    >
                      {t("Account")}
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? "bg-blue-200 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      href="#"
                    >
                      {t("Setting")}
                    </a>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-blue-200 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {t("Log in")}
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
