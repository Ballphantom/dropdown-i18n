import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import { useState } from "react";

type MenuType = "Profile" | "Account" | "Setting" | "Log in";

function Dropdown() {
  const { t } = useTranslation();
  const [selectedMenu, setSelectedMenu] = useState<MenuType | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuSelect = (menu: MenuType) => {
    setSelectedMenu(menu);
    setIsOpen(false);
  };

  return (
    <div className="Dropdown-container">
      <div className="">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button
              onClick={toggleDropdown}
              className="inline-flex w-full justify-center rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none shadow-md"
            >
              {selectedMenu
                ? t(`Dropdown_Menu_${selectedMenu}`)
                : t("Dropdown_Menu")}
              <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 text-white hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-non">
                <div className="px-1 py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-blue-200 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={() => handleMenuSelect("Profile")}
                      >
                        {t("Dropdown_Menu_Profile")}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-blue-200 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={() => handleMenuSelect("Account")}
                      >
                        {t("Dropdown_Menu_Account")}
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-blue-200 text-white" : "text-gray-900"
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        onClick={() => handleMenuSelect("Setting")}
                      >
                        {t("Dropdown_Menu_Setting")}
                      </button>
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
                        onClick={() => handleMenuSelect("Log in")}
                      >
                        {t("Dropdown_Menu_Log in")}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </div>
        </Menu>
      </div>
    </div>
  );
}

export default Dropdown;
