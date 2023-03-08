import React from "react";
import { BiArrowBack } from "react-icons/bi";

const TopNavDashboard = () => {
  return (
    <div>
      <div>
        <div className="-mt-4 mb-7">
          <section className="w-full">
            <nav className="flex px-3 justify-between w-[101%] bg-white shadow-sm rounded-lg text-black">
              <div className="flex w-full py-3 px-3 items-center justify-between">
                <div className="text-[#4D4BFA]">
                  <div className="flex gap-x-5">
                    <div className="flex gap-x-2 text-base items-center">
                      <BiArrowBack size={15} color="#4D4BFA" />
                      Back
                    </div>
                    <div className="flex flex-col">
                      <div className="text-lg lg:text-xl text-gray-700 font-semibold">
                        Edit a Role
                      </div>
                      <div className="text-xs text-gray-500">
                        Define the rights given to the role
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-[#4D4BFA] px-4 cursor-pointer hover:bg-[#716ff6] lg:ml-0 ml-3 lg:px-6 py-2 text-white rounded-lg text-base lg:text-lg">
                    Save
                  </div>
                </div>
              </div>
            </nav>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TopNavDashboard;
