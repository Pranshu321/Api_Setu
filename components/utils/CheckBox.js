import React from "react";

const CheckBox = () => {
  return (
    <div>
      <ul className="flex items-center w-full mb-6 text-sm font-medium bg-white border border-gray-200 rounded-lg sm:flex  dark:text-white">
        <li className="w-full ">
          <div className="flex items-center pl-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              defaultValue
              className="w-6 accent-[#4D45FA] h-6 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
            <label
              htmlFor="vue-checkbox-list"
              className="w-full py-3 ml-2 text-sm lg:text-lg font-semibold text-black"
            >
              Application Form
            </label>
          </div>
        </li>
        <li className="w-full ">
          <div className="flex items-center pl-3">
            <input
              id="react-checkbox-list"
              type="checkbox"
              defaultValue
              className="w-6 accent-[#4D45FA] h-6 text-blue-600 bg-gray-100 border-gray-300 rounded"
            />
          </div>
        </li>
        <li className="w-full ">
          <div className="flex items-center pl-3">
            <input
              id="angular-checkbox-list"
              type="checkbox"
              defaultValue
              className="w-6 h-6 accent-[#4D45FA] text-purple-600 bg-gray-100 border-gray-300 rounded"
            />
          </div>
        </li>
        <li className="w-full">
          <div className="flex items-center pl-3">
            <input
              id="laravel-checkbox-list"
              type="checkbox"
              defaultValue
              className="w-6 accent-[#4D45FA] h-6 text-blue-600 bg-gray-100 rounded"
            />
          </div>
        </li>
        <li className="w-full">
          <div className="flex items-center pl-3">
            <input
              id="laravel-checkbox-list"
              type="checkbox"
              defaultValue
              className="w-6 accent-[#4D45FA] h-6 text-blue-600 bg-gray-100 rounded"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CheckBox;
