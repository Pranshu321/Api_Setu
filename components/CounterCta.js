import React from "react";
import CountUp from "react-countup";
const CounterCta = () => {
	return (
		<div>
			<section
				className="pt-[40px] pb-[40px] text-white counter-bg"
				style={{ backgroundSize: "cover" }}
			>
				<div className="flex lg:flex-row flex-col gap-y-10 lg:gap-y-0 justify-evenly py-[40px]">
					<div className="flex flex-col items-center">
						<CountUp
							className="main-text"
							style={{ color: "#4e6775" }}
							end={2494}
							delay={1}
							duration={3}
						/>
						<span className="text-[12px] font-semibold text-gray-400">
							APIS PUBLISHED
						</span>
					</div>
					<div className="flex flex-col items-center">
						<CountUp
							className="main-text"
							style={{ color: "#4e6775" }}
							end={1080}
							delay={1}
							duration={3}
						/>
						<span className="text-[12px] font-semibold text-gray-400">
							APIS PUBLISHERS
						</span>
					</div>
					<div className="flex flex-col justify-center items-center">
						<CountUp
							className="main-text"
							style={{ color: "#4e6775" }}
							end={341}
							delay={1}
							duration={3}
						/>
						<span className="text-[12px] font-semibold text-gray-400">
							APIS CONSUMERS
						</span>
					</div>
				</div>
			</section>
		</div>
	);
};

export default CounterCta;
