import Link from "next/link";
import React from "react";
const Discover = () => {
	return (
		<div>
			<section
				className="pt-[40px] pb-[40px] text-white cta-bg"
				style={{ backgroundSize: "cover" }}
			>
				<div className="flex justify-center">
					<div className="flex flex-col">
						<h3 className="text-[40px] font-semibold text-center px-8 lg:px-0">
							Discover, Build and Innovate
						</h3>
						<div className="flex justify-center my-5">
							<Link
								href={"/"}
								className="btn-custom"
								style={{ background: "#fff", color: "#ff7001" }}
							>
								Get Started
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Discover;
