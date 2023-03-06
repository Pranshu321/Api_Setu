import React from "react";

const Tabs = () => {
  return (
    <div>
      <div className="text-xs lg:text-sm font-medium text-center text-gray-500">
        <ul className="flex justify-center lg:gap-x-32 flex-wrap -mb-px">
          <li className="lg:mr-2">
            <a
              href="#"
              className="inline-block lg:p-4 py-4 text-[#4D45FA] border-b-2 border-blue-600 border-transparent rounded-t-lg hover:text-[#4D45FA] hover:border-[#4D45FA]"
            >
              Collection Types
            </a>
          </li>
          <li className="lg:mr-2">
            <a
              href="#"
              className="inline-block p-4 text-[#9599A2] rounded-t-lg active hover:text-[#4D45FA] hover:border-[#4D45FA] hover:border-b-2"
              aria-current="page"
            >
              Single Types
            </a>
          </li>
          <li className="lg:mr-2">
            <a
              href="#"
              className="inline-block p-4 text-[#9599A2] rounded-t-lg hover:text-[#4D45FA] hover:border-[#4D45FA] hover:border-b-2"
            >
              Plugins
            </a>
          </li>
          <li className="lg:pl-5">
            <a
              href="#"
              className="inline-block p-4 text-[#9599A2] rounded-t-lg hover:text-[#4D45FA] hover:border-[#4D45FA] hover:border-b-2"
            >
              Settings
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tabs;
