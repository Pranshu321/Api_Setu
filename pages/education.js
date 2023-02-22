import Head from "next/head";
import React from "react";
import EducationApiCard from "../components/utils/EducationApiCard";
import EducationCards from "../components/utils/EducationCards";
import styles from "../styles/Education.module.css";

const education = () => {
	let print = [];
	for (let i = 0; i < 40; i++) {
		print.push(i);
	}
	return (
		<>
			<Head>
				<title>Education | APISetu</title>
				<link
					rel="shortcut icon"
					href="https://img1.digitallocker.gov.in/ndh/smart/images/apisetu_icon.png"
					type="image/x-icon"
				/>
			</Head>
			<div>
				<div className={[styles.bg]}>
					<div className={styles.bg}>
						<div className="flex pt-10 flex-col justify-center items-center gap-y-3">
							<p className="text-5xl text-gray-700 font-semibold">Education</p>
							<p className="text-sm text-gray-500 font-medium">
								Be Future Ready
							</p>
						</div>
						<div className="flex flex-col lg:flex-row justify-center gap-y-4 lg:gap-x-6 w-full mt-4">
							<EducationCards
								title={"Storage and verification"}
								content="Storage and verification of Educational academic awards in accordance with New Education policy."
							/>
							<EducationCards
								title={"Online admission process"}
								content="Admission to schools, colleges and universities in paperless and presenceless way."
							/>
							<EducationCards
								title={"Scholarship distribution"}
								content="Scholarship distribution and Online verification of education awards in most reliant manner."
							/>
						</div>
					</div>
					<div className="flex flex-col gap-y-5 pt-10 bg-white">
						<div className="flex justify-center">
							<p className="text-[19px] text-[#35404e] font-semibold">
								Education APIs Providers
							</p>
						</div>
						<div className="flex flex-wrap gap-x-7 bg-white gap-y-5 lg:mx-4 mb-10 justify-center">
							{print.map((item) => {
								return (
									<EducationApiCard
										title={"CPCT-MAPIT"}
										text={"Madhya Pradesh"}
										img={"https://cf-media.api-setu.in/logo/issuers/001504.jpg"}
										key={item}
									/>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default education;
