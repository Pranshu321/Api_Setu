import Head from "next/head";
import React from "react";
import EducationCards from "../components/utils/EducationCards";
import styles from "../styles/Education.module.css";

const education = () => {
	return (
        <>
            <Head>
                <title>Education | APISetu</title>
                <link rel="shortcut icon" href="https://img1.digitallocker.gov.in/ndh/smart/images/apisetu_icon.png" type="image/x-icon" />
            </Head>
			<div className={styles.bg}>
				<div className="py-10">
					<div className="flex flex-col justify-center items-center gap-y-3">
						<p className="text-5xl text-gray-700 font-semibold">Education</p>
						<p className="text-sm text-gray-500 font-medium">Be Future Ready</p>
					</div>
					<div className="flex flex-row justify-center gap-x-6 w-full mt-4">
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
                <div className="flex flex-col">
                    <div className="flex justify-center">
                        <p className="text-[19px] text-[#35404e] font-semibold">Education APIs Providers</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
			</div>
		</>
	);
};

export default education;
