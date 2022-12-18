import React from "react";
import { FaIdCard, FaRupeeSign } from "react-icons/fa";
import { AiFillCar, AiFillFile , AiFillFileText,AiFillFilePdf ,AiFillFileWord} from "react-icons/ai";
import { BsFillFileEarmarkExcelFill } from "react-icons/bs";

const TopServices = () => {
	const data = [
		{
			name: "Driving Licence",
			icon: <FaIdCard size={35} color="white"/>,
		},
		{
			name: "Vehicle RC",
			icon: <AiFillCar size={35} color="white"/>,
		},
		{
			name: "HSC Marksheet",
			icon: <AiFillFile size={35} color="white"/>,
		},
		{
			name: "SSC Marksheet",
			icon: <AiFillFileText size={35} color="white"/>,
		},
		{
			name: "Ration Card",
			icon: <AiFillFilePdf size={35} color="white"/>,
		},
		{
			name: "Residence Certificate",
			icon: <BsFillFileEarmarkExcelFill size={35} color="white"/>,
		},
		{
			name: "Income Certificate",
			icon: <FaRupeeSign size={35} color="white" />,
		},
		{
			name: "Caste Certificate",
			icon: <AiFillFile size={35} color="white" />,
		},
	];
	return (
		<div className="flex flex-col mt-12">
			<div className="text-center">
				<h3 className="text-2xl font-semibold text-[#35404E]">Most Popular API's</h3>
			</div>
			<div className="flex flex-row flex-wrap lg:gap-y-0 items-center lg:gap-x-0 gap-x-20 gap-y-14 my-10 justify-around">
				{data.map((item, idx) => (	
				<div key={idx+1} className="hover:bg-[#FF9100] p-6 rounded-lg text-white cursor-pointer">
					<div className="items-center gradient rounded-full p-6 w-20">
					{item.icon}
					</div>
						<div className="mt-2 text-center font-medium text-base text-[#676562]">{item.name.trim().split(/\s+/)[0]} <br /> {item.name.trim().split(/\s+/)[1]}</div>
				</div>
				))
				}
			</div>
		</div>
	);
};

export default TopServices;
