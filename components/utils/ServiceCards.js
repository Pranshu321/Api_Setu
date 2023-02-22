import Link from "next/link";
import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";

const ServiceCards = ({ head, content, icon , height}) => {
	const [hover, sethover] = useState(false);
	return (
		<>
			<div className="w-full flex flex-col rounded-xl bg-white">
				<Link
					style={{height : `${height!=""?height:null}`}}
                    onMouseEnter={() => sethover(true)}
                    onMouseLeave={()=>sethover(false)}
					className="relative lg:w-72 hover:bg-[#FF8300] block rounded-xl border border-gray-100 p-6 shadow-2xl"
					href=""
				>
					<div className="text-gray-500 flex gap-5 flex-row items-center">
						<div className="gradient p-3 rounded-full">{icon}</div>
                        <h3 className={`text-xl font-bold ${hover?"text-white":"text-[#35404e]"}`}>{head}</h3>
					</div>
					<div>
                        <p className={`mt-5 ${hover?"text-white":"text-[#35404e]"} text-base sm:block  text-left`}>
							{content}
						</p>
					</div>
				</Link>
			</div>
		</>
	);
};

export default ServiceCards;
