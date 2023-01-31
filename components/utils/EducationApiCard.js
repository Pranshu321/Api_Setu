import React from "react";

const EducationApiCard = ({title , text , img}) => {
	return (
		<div>
			<div class="lg:w-60 w-36 p-3 cursor-pointer h-max bg-white border flex items-center justify-center border-gray-300 rounded-lg shadow-lg hover:shadow-2xl">
				<div class="flex flex-col justify-center items-center flex-wrap">
					<img
						class="lg:w-24 lg:h-24 lg:mb-3 w-16 h-16 rounded-full"
						src={img}
						alt="Bonnie image"
					/>
					<h5 class="mb-1 lg:text-lg text-[16px] font-bold text-gray-700">{title}</h5>
					<span class="text-sm text-gray-500 lg:text-[14px] text-[10px]">{text}</span>
				</div>
			</div>
		</div>
	);
};

export default EducationApiCard;
