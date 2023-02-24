import React from "react";

const SecondMenu = ({ secondMenu, setsecondMenu }) => {
  return (
    <div>
      <div
        onMouseLeave={() => setsecondMenu(true)}
        className={`absolute hidden lg:block top-[65px] lg:top-[78px] left-64 bg-white z-40 lg:h-[68rem] w-72 transition-transform`}
        style={{ display: secondMenu ? "none" : null }}
      >
        <nav className="flex flex-col h-full gap-y-10">
          {/* <!-- Logo --> */}
          <div className="flex items-center justify-start flex-shrink-0 ml-6 py-4 pb-10">
            <h1 className="text-2xl font-semibold text-gray-600">Settings</h1>
          </div>

          {/* <!-- Links --> */}
          <div className="px-4 space-y-2 overflow-hidden hover:overflow-auto">
            <li className="list-none text-sm text-gray-500 font-semibold ml-3">
              GLOBAL SETTINGS
            </li>
            <li className="py-1 ml-3 text-gray-600 hover:bg-gray-100 px-3 rounded-lg">
              <a
                href="#"
                className="text-base font-normal text-gray-900 rounded-lg"
              >
                <span className="flex-1 whitespace-nowrap text-gray-600">
                  Overview
                </span>
              </a>
            </li>
            <li className="py-1 ml-3 text-gray-600 hover:bg-gray-100 px-3 rounded-lg">
              <a href="#" className="text-base font-normal text-gray-900 ">
                <span className="flex-1 whitespace-nowrap text-gray-600">
                  API Tokens
                </span>
              </a>
            </li>
            <li className="py-1 ml-3 text-gray-600 hover:bg-gray-100 px-3 rounded-lg">
              <a href="#" className="text-base font-normal text-gray-900">
                <span className="flex-1 whitespace-nowrap text-gray-600">
                  Documentation
                </span>
              </a>
            </li>
            <li className="py-1 ml-3 text-gray-600 hover:bg-gray-100 px-3 rounded-lg">
              <a href="#" className="text-base font-normal text-gray-900">
                <span className="flex-1 whitespace-nowrap text-gray-600">
                  Internationalization
                </span>
              </a>
            </li>
            <li className="py-1 ml-3 text-gray-600 hover:bg-gray-100 px-3 rounded-lg">
              <a href="#" className="text-base font-normal text-gray-900">
                <span className="flex-1 whitespace-nowrap text-gray-600">
                  Media Library
                </span>
              </a>
            </li>
            <li className="py-1 ml-3 text-gray-600 hover:bg-gray-100 px-3 rounded-lg">
              <a href="#" className="text-base font-normal text-gray-900">
                <span className="flex-1 whitespace-nowrap text-gray-600">
                  Webhooks
                </span>
              </a>
            </li>
          </div>
          <div className="px-4 overflow-hidden hover:overflow-auto">
            <li className="list-none text-sm text-gray-500 font-semibold ml-3">
              ADMINISTRATION PANEL
            </li>
            <li className="py-2 ml-3 text-gray-600 hover:bg-gray-100 px-3 rounded-lg">
              <a
                href="#"
                className="text-base font-normal text-gray-900 rounded-lg"
              >
                <span className="flex-1 whitespace-nowrap text-gray-600">
                  Roles
                </span>
              </a>
            </li>
            <li className="py-2 ml-3 text-gray-600 hover:bg-gray-100 px-3 rounded-lg">
              <a href="#" className="text-base font-normal text-gray-900 ">
                <span className="flex-1 whitespace-nowrap text-gray-600">
                  Users
                </span>
              </a>
            </li>
          </div>
          <div className="px-4 overflow-hidden hover:overflow-auto">
            <li className="list-none text-sm text-gray-500 font-semibold ml-3">
              EMAIL PANEL
            </li>
            <li className="py-2 ml-3 text-gray-600 hover:bg-gray-100 px-3 rounded-lg">
              <a
                href="#"
                className="text-base font-normal text-gray-900 rounded-lg"
              >
                <span className="flex-1 whitespace-nowrap text-gray-600">
                  Configuration
                </span>
              </a>
            </li>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default SecondMenu;
