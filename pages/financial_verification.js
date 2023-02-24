import Head from "next/head";
import React from "react";
import EducationApiCard from "../components/utils/EducationApiCard";
import EducationCards from "../components/utils/EducationCards";
import styles from "../styles/Education.module.css";

const Financial = () => {
  let print = [];
  for (let i = 0; i < 40; i++) {
    print.push(i);
  }
  return (
    <>
      <Head>
        <title>Financial Verification | APISetu</title>
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
              <p className="text-5xl text-gray-700 font-semibold text-center">
                Financial Verification
              </p>
              <p className="text-sm text-gray-500 font-medium">
                APIs Unlock Innovation in Banking and Financial Services
              </p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center gap-y-4 lg:gap-x-6 w-full mt-4">
              <EducationCards
                title={"Instant Digital Loans"}
                content="Borrowers today care about speed and experience when looking for loans online. Lenders use our financial data services to check credit worthiness of their customers."
              />
              <EducationCards
                title={"Bank API integration made easy"}
                wid={true}
                content="Build Banking-as-a-Service (BaaS) initiative to significantly transform the banking scenario in the country and transform banking process."
              />
              <EducationCards
                title={"KYC profiling"}
                content="Mitigate credit risk by reducing ID fraud Credit Risk ProfilingKYC is a key component for risk profiling in fintech. Use our services to build a stronger risk profile of your customer."
              />
            </div>
          </div>
          <div className="flex flex-col bg-white gap-y-5 pt-10">
            <div className="flex justify-center">
              <p className="text-[19px] text-[#35404e] font-semibold">
                Banking and Insurance APIs Providers
              </p>
            </div>
            <div className="flex flex-wrap gap-x-7 bg-white gap-y-5 lg:mx-4 mb-10 justify-center">
              {print.map((item) => {
                return (
                  <EducationApiCard
                    img={"https://cf-media.api-setu.in/logo/issuers/001927.png"}
                    title="New India Assurance"
                    text={"All States"}
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

export default Financial;
