import Head from "next/head";
import Image from "next/image";
import ApiPractice from "../components/ApiPractice";
import ApiPublishers from "../components/ApiPublishers";
import CounterCta from "../components/CounterCta";
import Cta from "../components/Cta";
import Discover from "../components/Discover";
import Hero from "../components/Hero";
import Service from "../components/Service";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>APISetu</title>
				<meta name="description" content="Generated by create next app" />
				<link
					rel="icon"
					href="https://img1.digitallocker.gov.in/ndh/smart/images/apisetu_icon.png"
				/>
			</Head>
			<Hero />
			<div className="my-28">
				<Service />
			</div>
			<div className="-mt-20 lg:mt-2">
				<ApiPublishers />
			</div>
			<div>
				<Discover />
			</div>
			<div>
				<CounterCta />
			</div>
			<div>
				<ApiPractice />
			</div>
			<div>
				<Cta />
			</div>
		</div>
	);
}
