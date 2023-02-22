import Head from "next/head";
import React from "react";
import { AiOutlineIdcard } from "react-icons/ai";
import EducationApiCard from "../components/utils/EducationApiCard";
import EducationCards from "../components/utils/EducationCards";
import ServiceCards from "../components/utils/ServiceCards";
import styles from "../styles/Education.module.css";

const Employment = () => {
	return (
		<>
			<Head>
				<title>Employment | APISetu</title>
				<link
					rel="shortcut icon"
					href="https://img1.digitallocker.gov.in/ndh/smart/images/apisetu_icon.png"
					type="image/x-icon"
				/>
			</Head>
			<div className="bg-white">
				<div className={[styles.bg]}>
					<div className={styles.bg}>
						<div className="flex pt-10 flex-col justify-center items-center gap-y-3">
							<p className="text-5xl text-gray-700 font-semibold">Employment</p>
							<p className="text-base text-gray-500 font-medium leading-relaxed">
								Enrich your records with intelligent demographics. <br /> Verify
								address, gender, age, income, education, etc.
							</p>
						</div>
						<div className="flex flex-col lg:flex-row justify-center gap-y-4 lg:gap-x-6 w-full mt-4">
							<EducationCards
								title={"Employment verification"}
								content="Simple and easy verification of employees before they join any organization. Eliminate lengthy verification process when you can verify at a single click."
							/>
							<EducationCards
								title={"Faster hiring process"}
								wid={true}
								content="Now is the Time for Transformation. Shorten your hiring cycle by verifying the future resources at a single click."
							/>
							<EducationCards
								title={"Availability of Life Long certificates"}
								content="Access all certificates from birth to education to employment to create verified profiles of prospective employees."
							/>
						</div>
					</div>
					<div className="flex flex-col gap-y-5 py-10 bg-white" style={{background:"white"}}>
						<div className="flex justify-around">
							<p className="text-[19px] text-[#35404e] font-semibold">
								Employment APIs
							</p>
						</div>
						<div className="flex justify-start lg:ml-[10rem] gap-x-5 gap-y-14 lg:flex-row flex-col flex-wrap">
							<div>
								<ServiceCards
									head={"Education and Skill"}
									content="Education & Skill 
									certificates API provided by different states for verification."
									height={"220px"}
									icon={<AiOutlineIdcard size={30} color="white" />}
								/>
							</div>
							<div>
								<ServiceCards
									head={"Pan Card"}
									content="Income Tax Department, Govt of India has provided PAN Verification Records to Indian citizens via DigiLocker."
									icon={<AiOutlineIdcard size={30} color="white" />}
								/>
							</div>
							<div>
								<ServiceCards
									head={"Driving Licence"}
									content="Driving License (DL) can be pulled by citizens into their DigiLocker accounts."
									icon={<AiOutlineIdcard size={30} color="white" />}
									height={"220px"}
								/>
							</div>
							<div>
								<ServiceCards
									head={"Ration Card"}
									content="Ration Cards issued by Food, Civil Supplies and Consumer Affairs Department are available for Verification."
									icon={<AiOutlineIdcard size={30} color="white" />}
								/>
							</div>
							<div>
								<ServiceCards
									head={"Caste Certificate"}
									content="Caste certificate API provided by different states for KYC verification."
									icon={<AiOutlineIdcard size={30} color="white" />}
									height={"220px"}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Employment;
