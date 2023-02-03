import React, { useState } from "react";

const EducationCards = ({ title, content, wid = false }) => {
	const [change, setchange] = useState(false);
	return (
		<div
			onMouseEnter={() => setchange(true)}
			onMouseLeave={() => setchange(false)}
			className="cursor-pointer"
		>
			<div
				className={`${
					change ? "bg-[#FF7300]" : "bg-white"
				} p-4 rounded-lg w-[380px] ${
					wid ? "min-h-[175px]" : null
				}  shadow-lg lg:mx-0 mx-3`}
			>
				<div className="flex flex-col gap-2 p-2">
					<p
						className={`${
							change ? "text-white" : "text-[#35404e]"
						} text-[20px] font-semibold`}
					>
						{title}
					</p>
					<p
						className={`${
							change ? "text-white" : "text-[#5f6368]"
						} text-[15px]`}
					>
						{content}
					</p>
				</div>
			</div>
		</div>
	);
};

export default EducationCards;
