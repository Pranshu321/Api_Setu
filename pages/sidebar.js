import Head from "next/head";
import React, { useState } from "react";
import StrapiSidebar from "../components/utils/StrapiSidebar";

const sidebar = () => {
  return (
    <>
      <Head>
        <title>Strapi Dashboard</title>
        <link
          rel="shortcut icon"
          href="https://img1.digitallocker.gov.in/ndh/smart/images/apisetu_icon.png"
          type="image/x-icon"
        />
      </Head>
      <div>
        <div>
          <StrapiSidebar />
        </div>
      </div>
    </>
  );
};

export default sidebar;
